import { createRouter, createWebHistory } from 'vue-router'
import ChatPageTest from '@/views/ChatPageTest'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'chat',
      component: ChatPageTest
    }
  ]
})

export default router
