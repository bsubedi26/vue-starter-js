import ToastMessage from '../components/Message.vue';

export default (router) => {
  const checkAuth = () => {
    const token = window.localStorage.getItem('feathers-jwt')
    // console.log('router::global statec ', this.a.app.$store.getters.isLoggedIn)
    if (token == null) {
      return false
    } else {
      return true
    }
  }

  router.beforeEach((toRoute, fromRoute, next) => {
    const authenticated = checkAuth()
    if (toRoute.meta.requiresAuth) {
      if (!authenticated) {
        ToastMessage.present('authRequired')
        next({
          path: '/login',
          // query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    } else {
      next() // make sure to always call next()
    }
  })

  return router
}
