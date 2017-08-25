import Vue from 'vue'
import Vuex from 'vuex'
import feathersVuex from 'feathers-vuex'
import feathersClient from '@/config/feathers'
import { configureFeathersVuex } from '@/config/helpers'
import createPersistedState from 'vuex-persistedstate'
import { createVuexLoader } from 'vuex-loading'
import user from './user'
import auth from './auth'
import product from './product'
import plugins from './plugins'

const VuexLoading = createVuexLoader({
  // The Vuex module name, 'loading' by default.
  moduleName: 'loading',
  // The Vue component name, 'v-loading' by default.
  componentName: 'v-loading',
  // Vue component class name, 'v-loading' by default.
  className: 'v-loading',
});

Vue.use(Vuex)
Vue.use(VuexLoading)

const store = new Vuex.Store({
  modules: {
    user,
    'localAuth': auth,
    product
  },
  plugins: [
    VuexLoading.Store,
    // createPersistedState(), 
    plugins,
    // feathersVuex(feathersClient,
    //   {
    //     idField: '_id',
    //     auth: {
    //       userService: '/users'
    //     }
    //   })
  ],
  // state: {}
})

configureFeathersVuex(store)
// import fClient from '@/config/feathers'
// fClient.configure(feathersVuex(store, 
//     {
//       idField: '_id',
//       auth: {
//         userService: '/users'
//       }
//     }
//   ))

// fClient.service('/users')
// fClient.service('/messages')
// fClient.service('/todos')
export default store