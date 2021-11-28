import { createRouter, createWebHistory } from 'vue-router'


const routes = [

  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/SiteInicial/Home.vue'),
    meta: {
      layout: 'AppLayoutSite'
    },
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/SiteInicial/Login.vue'),
    meta: {
      layout: 'AppLayoutSite'
    },
  },

  {
    path: '/cadastro',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/SiteInicial/Register.vue'),
    meta: {
      layout: 'AppLayoutSite'
    },
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard/Dashboard.vue'),
    meta: {
      layout: 'AppLayoutDashboard'
    },
  },

  {
    path: '/administracao',
    name: 'Administração',
    component: () => import(/* webpackChunkName: "about" */ '../views/Administracao/Admin.vue'),
    meta: {
      layout: 'AppLayoutDashboard'
    },
  },

  {
    path: '/administracao/usuarios',
    name: 'Administração de Usuários',
    component: () => import(/* webpackChunkName: "about" */ '../views/Administracao/Users/Users.vue'),
    meta: {
      layout: 'AppLayoutDashboard'
    },
  },

  {
    path: '/administracao/usuarios/editar/:id',
    name: 'Editar Usuário',
    component: () => import(/* webpackChunkName: "about" */ '../views/Administracao/Users/EditUser.vue'),
    meta: {
      layout: 'AppLayoutDashboard'
    },
  },

  {
    path: '/administracao/permissoes',
    name: 'Administração de Permissões',
    component: () => import(/* webpackChunkName: "about" */ '../views/Administracao/Roles/Roles.vue'),
    meta: {
      layout: 'AppLayoutDashboard'
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
