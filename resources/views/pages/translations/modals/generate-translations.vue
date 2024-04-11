<script setup lang="ts">

import IconChatgpt from "../../../components/icons/icon-chatgpt.vue"

const props = defineProps<{
    languageName: string,
    translationId: number,
    missingValues: number,
    totalValues: number,
    isProductionEnv: boolean
}>()

const { close } = useModal()

const loading = ref(false)
const onlyMissing = ref(true)
const regenerateEntities = ref(false)

const submit = () => {
    loading.value = true

    router.post(route("ltu.translation.generate", {
        translation: props.translationId
    }), {
        only_missing: onlyMissing.value,
        regenerate_entities: regenerateEntities.value
    }, {
        preserveScroll: true,
        onSuccess: () => {
            loading.value = false
            close()
        }
    })
}
</script>

<template>
    <Head title="Generate translations" />

    <Dialog size="lg">
        <div class="relative flex flex-col items-start justify-center gap-4 px-6 py-4">
            <div class="flex w-full items-start gap-4">
                <div class="flex size-16 shrink-0">
                    <IconChatgpt class="size-16 text-blue-300" />
                </div>

                <div class="flex-1">
                    <h3 class="text-balance text-xl font-semibold leading-6 text-gray-600">
                        Translate {{ languageName }}
                    </h3>

                    <p class="mt-1 text-sm text-gray-500">
                        <span>The process will generate translations for {{ onlyMissing ? missingValues : totalValues
                            }} phrases.
                        It may take a few minutes to complete. Please be patient.</span>
                    </p>
                </div>
            </div>

<!--            <div class="relative flex items-start">-->
<!--                <div class="flex h-6 items-center">-->
<!--                    <input-->
<!--                        id="with-entities" v-model="regenerateEntities" aria-describedby="with-entities-description" name="with-entities"-->
<!--                        type="checkbox" class="size-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600">-->
<!--                </div>-->

<!--                <div class="ml-3 text-sm leading-6">-->
<!--                    <label for="with-entities" class="font-medium text-gray-900">Also regenerate entity translations</label>-->

<!--                    <p id="with-entities-description" class="text-gray-500">Request the translation of all the missing fields for entities of your platform.</p>-->
<!--                </div>-->
<!--            </div>-->
            <div class="relative flex items-start">
                <div class="flex h-6 items-center">
                    <input
                        id="missing" v-model="onlyMissing" aria-describedby="missing-description" name="missing"
                        type="checkbox" class="size-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600">
                </div>

                <div class="ml-3 text-sm leading-6">
                    <label for="missing" class="font-medium text-gray-900">Only generate missing translations
                        ({{ missingValues }})</label>

                    <p id="missing-description" class="text-gray-500">Existing translations will not be altered.</p>
                </div>
            </div>


            <div v-if="!onlyMissing" class="w-full text-center">
                <Alert v-if="!isProductionEnv" variant="warning" class="text-left">
                    <strong>Warning:</strong> Existing translations will be overwritten.
                </Alert>
            </div>
            <div v-else class="w-full text-center">
                <Alert v-if="!missingValues" variant="warning" class="text-left">
                    <strong>Warning:</strong> No missing translations. If you want to regenerate all translations,
                    deselect 'Only generate missing translations'.
                </Alert>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-6 border-t px-6 py-4">
            <BaseButton variant="secondary" type="button" size="lg" tabindex="1" @click="close"> Close</BaseButton>

            <BaseButton
                variant="primary" type="button" size="lg" :disabled="loading || (onlyMissing && !missingValues && !regenerateEntities)"
                :is-loading="loading" @click="submit">
                Generate
            </BaseButton>
        </div>
    </Dialog>
</template>
