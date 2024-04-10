<?php

namespace Outhebox\TranslationsUI\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Outhebox\TranslationsUI\Http\Controllers\ChatGPTController;

class TranslateMissingWithAI extends Command
{
    public $signature = 'translations:translate-missing {translationId} {--all : Translate again the existing translations as well}';

    public $description = 'Translate missing translations with AI';

    public function handle(): int
    {
        $all = (bool)$this->option('all');
        $translationId = $this->argument('translationId');

        $this->info('Translating missing translations with AI...');

        try {
            ChatGPTController::translateLanguage($translationId, !$all);
            $this->info('Translations have been translated successfully');

            return self::SUCCESS;

        } catch (\Exception $e) {
            report($e);
            $this->error($e->getMessage());
            return self::FAILURE;
        }
    }
}
