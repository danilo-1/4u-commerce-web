import { createRouter, createWebHistory } from 'vue-router'


const routes = [

  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/SiteInicial/Home.vue'),
    meta:{
      layout: 'AppLayoutSite'
    },
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/SiteInicial/Login.vue'),
    meta:{
      layout: 'AppLayoutSite'
    },
  },

  {
    path: '/cadastro',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/SiteInicial/Register.vue'),
    meta:{
      layout: 'AppLayoutSite'
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
