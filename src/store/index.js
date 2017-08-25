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
import * as getters from './getters'

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
    product
    // 'localAuth': auth,
  },
  plugins: [
    VuexLoading.Store,
    // createPersistedState(), 
    plugins,
  ],
  getters: getters
})

// function that maps each feathers service as a vuex module
configureFeathersVuex(store)

export default store