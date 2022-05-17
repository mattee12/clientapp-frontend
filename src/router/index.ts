import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditClient from '../views/EditClient.vue'
import CreateClient from '../views/CreateClient.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/edit',
    name: 'edit',
    component: EditClient,
  },
  {
    path: '/create',
    name: 'create',
    component: CreateClient,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
