import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import Products from '@/pages/products/Products'
import ProductDetails from '@/pages/products/product-details'
import auth from './auth'

Vue.use(Router)



const router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      meta: { requiresAuth: true },
      // beforeEnter: checkAuth
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/products/:id',
      component: ProductDetails,

    },
    {
      path: '/products',
      component: Products,
      // children: [
      //   {
      //     path: ':id',
      //     component: ProductDetails,
      //     // meta: { requiresAuth: true }
      //   }
      // ]
    }
  ]
})

auth(router)

export default router