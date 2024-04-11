<?php

namespace Outhebox\TranslationsUI\Events;

use Illuminate\Foundation\Events\Dispatchable;

class TranslationsRequestedEvent
{
    use Dispatchable;

    public int $translationId;
    public string $languageCode;
    public bool $onlyMissingTranslations = false;
    public bool $regenerateEntitiesTranslations = false;

    public function __construct(int $translationId, string $languageCode, bool $onlyMissingTranslations = false, bool $regenerateEntitiesTranslations = false)
    {
        $this->translationId = $translationId;
        $this->languageCode = $languageCode;
        $this->onlyMissingTranslations = $onlyMissingTranslations;
        $this->regenerateEntitiesTranslations = $regenerateEntitiesTranslations;
    }
}
