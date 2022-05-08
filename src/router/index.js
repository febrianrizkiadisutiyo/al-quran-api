import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/chapter/:id',
    name: 'chapter',
    component: () => import('../views/Chapter.vue')
  },
  {
    path: '/audio',
    name: 'audio',
    component: () => import('../views/Audio.vue')
  },
  {
    path: '/terjemah',
    name: 'terjemah',
    component: () => import('../views/Terjemah.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
