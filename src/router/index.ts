import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsersView from '../views/UsersView.vue'
import MainLogin from '../views/MainLogin.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/users',
      name: 'about',
      component: UsersView
    },
    {
      path: '/login',
      name: 'login',
      component: MainLogin
    }
  ]
})

export default router
