import Vue from 'vue'
import Router from 'vue-router'
import Logowanie from './views/Logowanie.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Logowanie',
      component: Logowanie
    }
  ]
})
