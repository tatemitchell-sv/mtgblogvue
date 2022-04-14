import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }, {
      path: '/cardlist',
      name: 'cardlist',
      component: () => import('../views/CardListView.vue')
    },
    {
      path: '/card/:id',
      name: 'card',
      component: () => import('../views/CardView.vue')
    },
    {
      path: '/cardsearch',
      name: 'cardsearch',
      component: () => import('../views/CardSearch.vue')
    }
  ]
})

export default router
