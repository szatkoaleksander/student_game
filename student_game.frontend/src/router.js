import Vue from 'vue'
import Router from 'vue-router'
import Logowanie from './views/Logowanie.vue'
import Rejestracja from './views/Rejestracja.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Logowanie',
      component: Logowanie
    },
    {
      path: '/rejestracja',
      name: 'rejestracja',
      component: Rejestracja
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    }
  ]
})
