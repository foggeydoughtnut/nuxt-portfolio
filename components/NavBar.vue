<template>
  <div class="flex flex-row justify-center p-4 bg-background shadow-lg shadow-background">
    <div class="flex flex-row gap-4">
      <div v-for="page in pages">
        <NuxtLink 
          v-if="page.id === selectedPage"
          :to="page.to"
          :target="page.target"
          class="underline hover:text-secondary font-semibold underline-offset-4"
        >
          <font-awesome-icon :icon="page.icon" /> {{ page.title }}
        </NuxtLink>

        <NuxtLink
          v-else
          :to="page.to"
          @click="setSelectedPage(page.id)"
          :target="page.target"
          class="hover:text-secondary font-semibold"
        >
          <font-awesome-icon :icon="page.icon" /> {{ page.title }}
        </NuxtLink>
      </div>
      <LanguageDropdown />
    </div>
  </div>
</template>


<script setup lang="ts">
import { faHouse, faCircleInfo, faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const { t } = useI18n();
const localePath = useLocalePath();


const selectedPage = ref(0);

const setSelectedPage = (id: number) => {
  selectedPage.value = id;
}




const pages = computed(() => [
  {
    title: t('home'),
    to: localePath({ name: 'index' }),
    icon: faHouse,
    id: 0,
    target: '',
  },
  {
    title: t('about'),
    to: localePath({ name: 'about' }),
    icon: faCircleInfo,
    id: 1,
    target: '',
  },
  {
    title: t('projects'),
    to: localePath({ name: 'projects' }),
    icon: faDiagramProject,
    id: 2,
    target: '',
  },
  {
    title: t('github'),
    to: 'https://github.com/foggeydoughtnut',
    icon: faGithub,
    id: 3,
    target: "_blank"
  },
  {
    title: t('linkedin'),
    to: 'https://www.linkedin.com/in/jeff-anderson-967391236/',
    icon: faLinkedin,
    id: 4,
    target: "_blank"
  }
])


</script>