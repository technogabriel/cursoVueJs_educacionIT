import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: InicioView
  },
  {
    path: '/ciclo-vida',
    name: 'ciclo-vida',
    component: () => import(/* webpackChunkName: "ciclo-vida" */ '../views/CicloVidaView.vue')
  },
  {
    path: '/ciclo-vida-v3',
    name: 'ciclo-vida-v3',
    component: () => import(/* webpackChunkName: "ciclo-vida-v3" */ '../views/CicloVidaViewV3.vue')
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: () => import(/* webpackChunkName: "nosotros" */ '../views/NosotrosView.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/ContactoView.vue')
  }
  ,
  {
    path: '/vuex-view',
    name: 'vuex-view',
    component: () => import(/* webpackChunkName: "vuex-view" */ '../views/VuexView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
