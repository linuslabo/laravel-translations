<?php

namespace Outhebox\TranslationsUI\Events;

use Illuminate\Foundation\Events\Dispatchable;

class TranslationsPublishedEvent
{
    use Dispatchable;

    public array $translationLanguageCodes;

    public function __construct(array $translationLanguageCodes)
    {
        $this->translationLanguageCodes = $translationLanguageCodes;
    }
}
