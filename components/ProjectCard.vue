<template>
  <div class="flex flex-col text-start shadow-xl rounded-xl overflow-hidden relative w-full">
    <div class="flex justify-center h-3/5 overflow-hidden w-full">
      <NuxtImg v-if="image && lazyLoadImages" :src="image" :placeholder="[500, 400, 75, 5]" sizes="80vw sm:50vw md:700px" loading="lazy" />
      <NuxtImg v-else-if="image && !lazyLoadImages" :src="image" :placeholder="[500, 400, 75, 5]" sizes="80vw sm:50vw md:700px" />
    </div>
    <div class="grid grid-rows-2 p-8 flex-1">
      <div>
        <h1 class="font-semibold text-2xl">{{ t(title) }}</h1>
        <p class="text-md pt-4">{{ t(description) }}</p>
      </div>
      <div class="self-end justify-end flex flex-row">
        <NuxtLink 
          :to="link"
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
  link: string,
  lazyLoadImages: boolean,
}>()



const { t } = useI18n();
</script>