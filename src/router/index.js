import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/friends',
    name: 'friends',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/event/:id',
    name: 'eventSingle',
    component: () => import('../views/EventSingle.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
