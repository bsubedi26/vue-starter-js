import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { createVuexLoader } from 'vuex-loading'
import authModule from './auth'
import product from './product'
import fClient from '@/config/feathers'
import fVuex from 'feathers-vuex'

const VuexLoading = createVuexLoader({
  moduleName: 'loading',
  componentName: 'v-loading',
  className: 'v-loading',
})

Vue.use(Vuex)
Vue.use(VuexLoading)

const featherVuex = fVuex(fClient, {
  idField: '_id'
})

// const todoModule = dynamicModuleRevised('todo') 

const store = new Vuex.Store({
  modules: {
    product
  },
  plugins: [
    VuexLoading.Store,
    authModule,
    featherVuex.service('/email'),
    featherVuex.service('/message'),
    featherVuex.service('/users'),
    // createPersistedState(), 
    
  ]
})

export default store