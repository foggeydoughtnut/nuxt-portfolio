<template>
  <PageTitle title="projects_page_title" description="These are projects that I've worked on. It includes projects I've done at work as well as in my free time." />
  <nav class="flex space-x-8 items-center justify-center">
    <div 
      v-for="tab in tabs"
      :key="tab.name"
      :class="[tab.id === selectedTab ? 'border-b' : '', 'hover:border-secondary hover:text-secondary group inline-flex items-center py-4 px-1 text-lg font-medium cursor-pointer']"
      :aria-current="tab.id === selectedTab ? 'page' : undefined"
      @click="setSelectedTab(tab.id)"
    >
      <font-awesome-icon :icon="tab.icon" class="mr-1 h-8 w-8" />
      <span>{{ tab.name }}</span>
    </div>
  </nav>

  <div class="flex items-center justify-center">
    <div class="grid grid-cols-2 gap-4 my-8 w-2/3">
      <ProjectCard
        v-for="project in projects[selectedTab]"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :link="project.link"
      />
    </div>
  </div>

  

</template>

<script setup lang="ts">
import { faGamepad, faGlobe, faCubesStacked } from '@fortawesome/free-solid-svg-icons';

type Project = {
  title: string,
  description: string,
  image: string,
  link: string
}


const selectedTab = ref(0);

const setSelectedTab = (id: number) => {
  selectedTab.value = id;
}


const tabs = [
  { id: 0, name: 'Web Development', href: '#', icon: faGlobe },
  { id: 1, name: 'Game Development', href: '#', icon: faGamepad },
  { id: 2, name: 'Other', href: '#', icon: faCubesStacked },
]

const webProjects: Project[] = [
  {
    title: "Komodo Eye",
    description: "Helped develop the Komodo Eye tool",
    image: 'KomodoEye.png',
    link: 'https://komodosystems.com/',
  },
  {
    title: "Grid Observer",
    description: "Helped maintain and develop features on the GridObserver Platform",
    image: 'GridObserver.png',
    link: 'https://conxx.net/gridobserver_overview.php',
  },
  {
    title: "Aspire's Power Visualization",
    description: "A visualization server I created to visualize energy in and outflow as well as Aspire's energy management system. It also shows the Salt Lake City and Ogden electric bus information",
    image: 'AspireVisualization.png',
    link: 'https://github.com/DIRECTLab/evr-visualization-react'
  },
  {
    title: "Charger Reservation Application",
    description: "A mobile friendly website I created to reserve electric vehicle chargers.",
    image: 'ReservationApplication.png',
    link: 'https://github.com/DIRECTLab/reservation-frontend-web'
  },
  {
    title: "Previous Astro Portfolio Website",
    description: "This is my old portfolio website created using Astro.js",
    image: 'PortfolioSite.png',
    link: 'https://github.com/foggeydoughtnut/Portfolio-v2'
  },
]

const gameProjects: Project[] = [
  {
    title: 'Galaga',
    description: 'A Galaga replica I created in Monogame.',
    image: 'Galaga.png',
    link: 'https://github.com/foggeydoughtnut/Galaga',
  },
  {
    title: 'Pong',
    description: 'A Pong replica I created in Monogame following the ECS architectural pattern.',
    image: 'Pong.png',
    link: 'https://github.com/foggeydoughtnut/Pong',
  },
  {
    title: 'Space Guy',
    description: 'This is a top-down 2d game that I created in Unity.',
    image: 'space-guy.png',
    link: 'https://github.com/foggeydoughtnut/SpaceGuy-Unity',
  },
  {
    title: 'Hack USU 2023 JRPG',
    description: 'Developed this game in 24 hours with two other people. We built out a JRPG built out in Unity and took second place out of hundreds of people.',
    image: 'HackUSU2023.png',
    link: 'https://github.com/Serpents-of-the-East/hackUSU-2023',
  },
  {
    title: 'Hack USU 2022 Crypt',
    description: 'Developed this game in 24 hours with two other people. Created a side scrolling game in Unity and took first place in the game category.',
    image: 'HackUSU2022.png',
    link: 'https://github.com/Serpents-of-the-East/hack-usu',
  }
]

const otherProjects: Project[] = [
  {
    title: 'Mountain Climb',
    description: 'This project used a RL agent to make the car climb up the hill and reach the flag.',
    image: 'MountainClimb.png',
    link: 'https://github.com/foggeydoughtnut/mountain-climb'
  },
]


const projects = [
  webProjects,
  gameProjects,
  otherProjects,
]


</script>