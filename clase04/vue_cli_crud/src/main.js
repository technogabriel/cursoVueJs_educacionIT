import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as bootstrap from 'bootstrap'
import './styles.css'

createApp(App).use(router).mount('#app')
