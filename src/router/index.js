import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
// divisão de código nas rotas
// isso gera um pedaço separado (About.[hash].js) para esta rota
// que é carregado lentamente quando a rota é visitada.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
