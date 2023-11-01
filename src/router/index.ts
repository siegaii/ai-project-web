import { createRouter, createWebHistory } from 'vue-router'
import ChatContainer from '@/views/ChatContainer'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/chat',
      name: 'chat',
      component: ChatContainer
    }
  ]
})

export default router
