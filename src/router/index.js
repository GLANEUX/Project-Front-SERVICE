import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'salle',
      component: () => import('../views/SalleView.vue')
    },
        {
      path: '/salle',
      name: 'salle',
      component: () => import('../views/SalleView.vue')
    },
    {
      path: '/cuisine',
      name: 'cuisine',
      component: () => import('../views/CuisineView.vue')
    },{
        path: '/tips',
        name: 'tips',
        component: () => import('../views/TipsView.vue')
      },
      {
        path: '/service',
        name: 'service',
        component: () => import('../views/ServiceView.vue')
      }
  ]
})

export default router
