import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/signup',
      component: Signup
    },
  ]
})
