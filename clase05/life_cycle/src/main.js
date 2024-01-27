import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as bootstrap from 'bootstrap'
import './style.css'
import store from './store'
//import { Store } from 'vuex'


createApp(App)
.use(store)
.use(router)
.mount('#app')
