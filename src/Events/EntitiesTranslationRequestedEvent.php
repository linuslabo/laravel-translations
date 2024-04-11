<?php

namespace Outhebox\TranslationsUI\Events;

class EntitiesTranslationRequestedEvent
{
    public string $languageCode;

    public function __construct(string $languageCode)
    {
        $this->languageCode = $languageCode;
    }
}
