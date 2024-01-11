<template>
  <div class="flex flex-row justify-center p-4 bg-background shadow-lg shadow-background">
    <div class="flex flex-row gap-4">
      <div v-for="page in pages">
        <NuxtLink :to="page.to" v-if="page.id === selectedPage" class="underline hover:text-secondary font-semibold underline-offset-4"><font-awesome-icon :icon="page.icon" /> {{ page.title }}</NuxtLink>
        <NuxtLink :to="page.to" v-else @click="setSelectedPage(page.id)" class="hover:text-secondary font-semibold"><font-awesome-icon :icon="page.icon" /> {{ page.title }}</NuxtLink>
      </div>
      <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
        {{ console.log(availableLocales) }}
        {{  locale.name }}
      </NuxtLink>
    </div>
  </div>
</template>


<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables';


const { t } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath()
const { locale, locales } = useI18n()

const availableLocales = computed(() => {
  console.log(locales.value)

  return (<LocaleObject[]>locales.value);
})

const selectedPage = ref(0);

const setSelectedPage = (id: number) => {
  selectedPage.value = id;
}




const pages = [
  {
    title: t('home'),
    to: localePath({ name: 'index' }),
    icon: 'fa-solid fa-house',
    id: 0,
  },
  {
    title: t('about'),
    to: localePath({ name: 'about' }),
    icon: 'fa-solid fa-circle-info',
    id: 1,
  },
  {
    title: t('projects'),
    to: localePath({ name: 'projects' }),
    icon: 'fa-solid fa-diagram-project',
    id: 2,
  },
  {
    title: t('github'),
    to: 'https://github.com/foggeydoughtnut',
    icon: 'fa-brands fa-github',
    id: 3
  },
  {
    title: t('linkedin'),
    to: 'https://www.linkedin.com/in/jeff-anderson-967391236/',
    icon: 'fa-brands fa-linkedin',
    id: 4
  }
]


</script>