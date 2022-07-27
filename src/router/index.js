import Vue from 'vue'
import VueRouter from 'vue-router'
import DemoTemplate from '../views/_DemoTemplate'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DemoTemplate',
    component: DemoTemplate,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
