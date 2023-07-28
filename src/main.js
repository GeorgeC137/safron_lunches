import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from './filters'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faYoutube)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')

app.config.globalProperties.$filters = filters
