<template>
  <div class="text-start shadow-xl rounded-xl overflow-hidden">
    <NuxtPicture v-if="image" :src="image"/>
    <div class="p-8">
      <h1 class="font-semibold text-2xl">{{ t(title) }}</h1>
      <p class="text-md my-4">{{ t(description) }}</p>
      <div class="flex flex-row justify-end">
        <NuxtLink 
          to="https://github.com/foggeydoughtnut/Portfolio-v2"
          target="_blank"
          class="bg-primary hover:bg-primary-dark px-4 py-3 rounded-lg font-semibold text-lg transition-all ease-in-out"
        >
          {{ t('learn_more') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    image?: string,
    title: string,
    description: string,   
  }>()

  const { t } = useI18n();
</script>