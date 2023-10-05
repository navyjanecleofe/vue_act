import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '../views/IndexPage.vue'
import AboutPage from '../views/AboutPage.vue'
import ServicePage from '../views/ServicePage.vue'
import ContactPage from '../views/ContactPage.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexPage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/service',
    name: 'ServicePage',
    component: ServicePage
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
