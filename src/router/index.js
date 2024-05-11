import { createRouter, createWebHistory } from 'vue-router'

const HomepagePage = () => import('../views/HomepageView.vue')
const GreetingPage = () => import('../views/GreetingView.vue')
const AuthPage = () => import('../views/AuthView.vue')

const routes = [
  {
    path: '/',
    component: GreetingPage
  },
  { path: '/map', component: HomepagePage },
  { path: '/auth', component: AuthPage }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
