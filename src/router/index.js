import Vue from 'vue'
import Router from 'vue-router'

import routerAuth from '../config/router-auth'
import rootRoutes from './root.routes'
import accountRoutes from './account.routes'
import productRoutes from './products.routes'


Vue.use(Router)

const router = new Router({
  routes: [
    ...rootRoutes,
   ...accountRoutes,
   ...productRoutes
  ]
})

routerAuth(router)

export default router