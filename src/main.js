import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import state from '@/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

library.add(faAnglesRight)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .use(state)
  .mount('#app')
