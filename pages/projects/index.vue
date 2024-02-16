<template>
  <PageTitle title="projects_page_title" description="projects_page_description" />
  <nav class="flex space-x-8 items-center justify-center">
    <div 
      v-for="tab in tabs"
      :key="tab.name"
      :class="[tab.id === selectedTab ? 'border-b' : '', 'hover:border-secondary hover:text-secondary group inline-flex items-center py-4 px-1 text-lg font-medium cursor-pointer']"
      :aria-current="tab.id === selectedTab ? 'page' : undefined"
      @click="setSelectedTab(tab.id)"
    >
      <font-awesome-icon :icon="tab.icon" class="mr-1 h-8 w-8" />
      <span>{{ t(tab.name) }}</span>
    </div>
  </nav>

  <div class="flex items-center justify-center">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 my-8 w-2/3">
      <div v-for="project in projects[selectedTab]" :key="project.title">
        <ProjectCard
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :link="project.link"
          :lazy-load-images="project.lazyLoadImage"
          :alt-text="project.altText"
        />
      </div>
    </div>
  </div>

  

</template>

<script setup lang="ts">
import { faGamepad, faGlobe, faCubesStacked } from '@fortawesome/free-solid-svg-icons';

const { t } = useI18n();

type Project = {
  title: string,
  description: string,
  image: string,
  link: string,
  lazyLoadImage: boolean,
  altText: string,
}


const selectedTab = ref(0);

const setSelectedTab = (id: number) => {
  selectedTab.value = id;
}


const tabs = [
  { id: 0, name: 'web_development', href: '#', icon: faGlobe },
  { id: 1, name: 'game_development', href: '#', icon: faGamepad },
  { id: 2, name: 'other_development', href: '#', icon: faCubesStacked },
]

const webProjects: Project[] = [
  {
    title: "komodo_eye_title",
    description: "komodo_eye_description",
    image: 'KomodoEye.webp',
    link: 'https://komodosystems.com/',
    lazyLoadImage: false,
    altText: 'Komodo Eye image'
  },
  {
    title: "grid_observer_title",
    description: "grid_observer_description",
    image: 'GridObserver.webp',
    link: 'https://conxx.net/gridobserver_overview.php',
    lazyLoadImage: false,
    altText: 'Image of Grid Observer'
  },
  {
    title: "aspire_power_title",
    description: "aspire_power_description",
    image: 'AspireVisualization.webp',
    link: 'https://github.com/DIRECTLab/evr-visualization-react',
    lazyLoadImage: false,
    altText: 'Aspire Visualization'
  },
  {
    title: "charger_reservation_title",
    description: "charger_reservation_description",
    image: 'ReservationApplication.webp',
    link: 'https://github.com/DIRECTLab/reservation-frontend-web',
    lazyLoadImage: false,
    altText: 'Charger Reservation App image'
  },
  {
    title: "astro_portfolio_title",
    description: "astro_portfolio_description",
    image: 'PortfolioSite.webp',
    link: 'https://github.com/foggeydoughtnut/Portfolio-v2',
    lazyLoadImage: true,
    altText: 'Astro Portfolio image'
  },
]

const gameProjects: Project[] = [
  {
    title: 'galaga_title',
    description: 'galaga_description',
    image: 'Galaga.webp',
    link: 'https://github.com/foggeydoughtnut/Galaga',
    lazyLoadImage: false,
    altText: 'Galaga replica image'
  },
  {
    title: 'pong_title',
    description: 'pong_description',
    image: 'Pong.webp',
    link: 'https://github.com/foggeydoughtnut/Pong',
    lazyLoadImage: false,
    altText: 'Pong replica image'
  },
  {
    title: 'space_guy_title',
    description: 'space_guy_description',
    image: 'space-guy.webp',
    link: 'https://github.com/foggeydoughtnut/SpaceGuy-Unity',
    lazyLoadImage: false,
    altText: 'Space Guy image'
  },
  {
    title: 'hack_usu_2023_title',
    description: 'hack_usu_2023_description',
    image: 'HackUSU2023.webp',
    link: 'https://github.com/Serpents-of-the-East/hackUSU-2023',
    lazyLoadImage: false,
    altText: 'Hack USU 2023 Image'
  },
  {
    title: 'hack_usu_2022_title',
    description: 'hack_usu_2022_description',
    image: 'HackUSU2022.webp',
    link: 'https://github.com/Serpents-of-the-East/hack-usu',
    lazyLoadImage: true,
    altText: 'Hack USU 2022 image'
  }
]

const otherProjects: Project[] = [
  {
    title: 'mountain_climb_title',
    description: 'mountain_climb_description',
    image: 'MountainClimb.webp',
    link: 'https://github.com/foggeydoughtnut/mountain-climb',
    lazyLoadImage: false,
    altText: 'Mountain climb image'
  },
]


const projects = [
  webProjects,
  gameProjects,
  otherProjects,
]


</script>