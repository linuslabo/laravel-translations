<?php

namespace Outhebox\TranslationsUI\Http\Controllers;

use Exception;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Outhebox\TranslationsUI\Models\Phrase;
use Outhebox\TranslationsUI\Models\Translation;

class ChatGPTController extends BaseController
{
    public static function translateLanguage($translationId, $onlyMissing = true)
    {
        $translation = Translation::find($translationId);

        if ($onlyMissing) {
            $phrasesIds = Phrase::where('translation_id', $translationId)->whereNull('value')->select('phrase_id');
        } else {
            $phrasesIds = Phrase::where('translation_id', $translationId)->select('phrase_id');
        }

        $sourceLanguageCode = Translation::where('source', 1)->first()->language->code; // en

        Log::debug('phrasesIds: ' . $phrasesIds->count(), ['onlyMissing' => $onlyMissing,
            'translationId' => $translationId
        ]);

        $phrasesToTranslate = Phrase::whereIn('id', $phrasesIds)->select('key', 'value', 'group')->get();
        $phrasesToTranslateGrouped = $phrasesToTranslate->groupBy('group');

        $phrasesToTranslateByGroup = [];
        foreach ($phrasesToTranslateGrouped as $group => $phrases) {
            $phrasesToTranslateByGroup[$group] = $phrases->mapWithKeys(function ($phrase) {
                return [$phrase->key => $phrase->value];
            });

            $phrasesNumber = count($phrasesToTranslateByGroup[$group]);
            Log::debug('phrasesToTranslate: ', [
                'group' => $group,
                'phrases' => $phrasesNumber,
            ]);

            // chunk the phrases to translate in groups of 100
            $count = 1;
            $chunkSize = 50;
            $chunkNumber = ceil($phrasesNumber / $chunkSize);
            foreach ($phrasesToTranslateByGroup[$group]->chunk($chunkSize) as $chunk) {
                $messageForChatGPT = 'Given the following nested key-value json array, translate its values from English to ' . $translation->language->name . 'Do not translate the array keys and the html tags. Preserve the case of the words (also kekab-case when it applies): ' . json_encode($chunk);

                try {
                    $translatedPhrases = self::askChatGPT($messageForChatGPT);

                    Log::debug('translatedPhrases: ', [
                        'group' => $group,
                        'chunk' => $count++ . '/' . $chunkNumber
                    ]);

                    if (!empty($translatedPhrases)) {
                        $groupName = $group === $sourceLanguageCode ? $translation->language->code : $group;

                        foreach ($translatedPhrases as $key => $value) {
                            $phrase = Phrase::where('key', $key)
                                ->where('translation_id', $translationId)
                                ->where('group', $groupName)
                                ->first();

                            if ($phrase) {
                                $v = $groupName === 'routes' ? Str::slug($value) : $value; // slugify the value if the group is 'routes'
                                $phrase->update(['value' => $v]);
                            }
                        }
                    }
                } catch (Exception $e) {
                    Log::error('Error asking ChatGPT: ' . $e->getMessage());
                    report($e);
                    throw new Exception('Error asking ChatGPT: ' . $e->getMessage());
                }
            }
        }

        Log::debug('Finished translating ' . $translation->language->name . ' phrases');
    }

    /**
     * @param $messageForChatGPT
     * @return mixed|null
     * @throws Exception
     */
    public static function askChatGPT($messageForChatGPT)
    {
        $response = Http::withToken(config('translations.openai.api_key'))
            ->timeout(60 * 10)
            ->post('https://api.openai.com/v1/chat/completions', [
                'model' => 'gpt-3.5-turbo-0125',
                'response_format' => [
                    'type' => 'json_object',
                ],
                'messages' => [
                    [
                        'role' => 'user',
                        'content' => $messageForChatGPT
                    ]
                ],
                'temperature' => 0,
                'top_p' => 1,
                'frequency_penalty' => 0,
                'presence_penalty' => 0
            ]);

//        Log::debug('response: ' . $response->body());

        // check "finish_reason"
        if (isset($response['choices'][0]['message']['finish_reason']) && $response['choices'][0]['message']['finish_reason'] !== 'stop') {
            Log::error('Error asking ChatGPT: ' . $response['choices'][0]['message']['finish_reason']);
//            throw new Exception('Error asking ChatGPT: ' . $response['choices'][0]['message']['finish_reason']);
        }


        if ($response->failed()) {
            Log::error('Failed asking ChatGPT: ' . $response->body());
            throw new Exception('Failed asking ChatGPT: ' . $response->body());

        } else {
            if (isset($response['error'])) {
                Log::error('Error asking ChatGPT: ' . $response['error']);
                throw new Exception('Error asking ChatGPT: ' . $response['error']);
            }

            if (isset($response['choices'][0]['message']['role']) && $response['choices'][0]['message']['role'] === 'assistant') {
                return json_decode($response['choices'][0]['message']['content'], true);
            }
        }

        return null;
    }
}
