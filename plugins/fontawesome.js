import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faHouse, faCircleInfo, faDiagramProject, faGamepad, faGlobe, faCubesStacked } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';




// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false
library.add(
  faHouse,
  faCircleInfo,
  faDiagramProject,
  faGamepad,
  faGlobe,
  faCubesStacked,
  faGithub,
  faLinkedin
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})