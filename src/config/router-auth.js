export default (router) => {
  const checkAuth = () => {
    const token = window.localStorage.getItem('feathers-jwt')
    console.log('tok ', token)
    // console.log('router::global statec ', this.a.app.$store.getters.isLoggedIn)
    if (token == null) {
      return false
    } else {
      return true
    }
  }

  router.beforeEach((toRoute, fromRoute, next) => {
    const authenticated = checkAuth()
    console.log("authenticated? ", authenticated)
    if (toRoute.meta.requiresAuth) {
      if (!authenticated) {
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
