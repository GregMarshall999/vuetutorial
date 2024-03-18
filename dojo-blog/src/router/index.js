import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Intro from '../views/Intro.vue'

const routes = [
  {
    path: '/', 
    name: 'Home',
    component: Home
  },
  {
    path: '/intro',
    name: 'Intro',
    component: Intro
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
