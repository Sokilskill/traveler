import { createRouter, createWebHistory } from 'vue-router'

const HomepagePage = () => import('../views/HomepageView.vue')
const GreetingPage = () => import('../views/GreetingView.vue')
const AuthPage = () => import('../views/AuthView.vue')
const LoginPage = () => import('../components/Auth/LoginForm/LoginForm.vue')
const RegistrationPage = () => import('../components/Auth/RegistrationForm/RegistrationForm.vue')

const routes = [
  {
    path: '/',
    component: GreetingPage
  },
  { path: '/map', component: HomepagePage },
  {
    path: '/auth',
    component: AuthPage,
    children: [
      { path: 'login', component: LoginPage },
      { path: 'registration', component: RegistrationPage }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
