<?php

namespace Outhebox\TranslationsUI\Listeners;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Log;
use Outhebox\TranslationsUI\Events\TranslationsRequestedEvent;
use Outhebox\TranslationsUI\Http\Controllers\ChatGPTController;

class TranslationsRequestedEventListener implements ShouldQueue
{
    use Queueable;

    public function __construct()
    {
        $this->onQueue('translations');
    }

    public function handle(TranslationsRequestedEvent $event): void
    {
        Log::info('Translations requested', [
            'translationId' => $event->translationId,
            'languageCode' => $event->languageCode,
            'onlyMissingTranslations' => $event->onlyMissingTranslations,
            'regenerateEntitiesTranslations' => $event->regenerateEntitiesTranslations,
        ]);

        try {
            ChatGPTController::translateLanguage($event->translationId, $event->onlyMissingTranslations ?? true);

        } catch (\Exception $e) {
            report($e);
            Log::error('Error while translating language', [
                'translationId' => $event->translationId,
                'languageCode' => $event->languageCode,
                'onlyMissingTranslations' => $event->onlyMissingTranslations,
                'regenerateEntitiesTranslations' => $event->regenerateEntitiesTranslations,
                'error' => $e->getMessage(),
            ]);

            throw $e;
        }
    }

}
