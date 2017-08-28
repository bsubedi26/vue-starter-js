import Vue from 'vue'
import Vuex from 'vuex'
import feathersClient from '@/config/feathers'
import { configureFeathersVuex } from '@/config/helpers'
import createPersistedState from 'vuex-persistedstate'
import { createVuexLoader } from 'vuex-loading'
import authModule from './auth'
import messageModule from './message'
import userModule from './user'
import product from './product'

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
    product
  },
  plugins: [
    // createPersistedState(), 
    VuexLoading.Store,
    authModule,
    messageModule,
    userModule
  ]
})

export default store