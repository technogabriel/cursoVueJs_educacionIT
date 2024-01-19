import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'productos',
    component : () => import(/* webpackChunkName: "productos" */ '../views/ProductosView.vue')
  },
  {
    path: '/productos/:id',
    name: 'productos-details',
    component : () => import(/* webpackChunkName: "productos-details" */ '../views/ProductosDetailView.vue')
  },
  {
    path: '/productos/edit/:id',
    name: 'productos-edit',
    component : () => import(/* webpackChunkName: "productos-edit" */ '../views/ProductosEditView.vue')
  },
  {
    path: '/productos/create',
    name: 'productos-create',
    component : () => import(/* webpackChunkName: "productos-create" */ '../views/ProductosCreateView.vue')
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    
    component: () => import(/* webpackChunkName: "nosotros" */ '../views/NosotrosView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
