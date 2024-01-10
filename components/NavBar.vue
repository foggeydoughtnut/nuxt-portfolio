<template>
  <div class="flex flex-row justify-center p-4 bg-background shadow-lg shadow-background">
    <div class="flex flex-row gap-4">
      <div v-for="page in pages">
        <NuxtLink :to="page.to" v-if="page.id === selectedPage" class="underline hover:text-secondary font-semibold underline-offset-4"><font-awesome-icon :icon="page.icon" /> {{ page.title }}</NuxtLink>
        <NuxtLink :to="page.to" v-else @click="setSelectedPage(page.id)" class="hover:text-secondary font-semibold"><font-awesome-icon :icon="page.icon" /> {{ page.title }}</NuxtLink>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">

const { t } = useI18n();
const localePath = useLocalePath();

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
]
</script>