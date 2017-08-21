import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import IdleVue from 'idle-vue'
import { createVuexLoader } from 'vuex-loading'
import user from './user'
import product from './product'
import plugins from './plugins'
import cryptoCurrency from './crypto-currency'

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
    product,
    cryptoCurrency
  },
  plugins: [VuexLoading.Store, createPersistedState(), plugins],

})

// const idleOptions = { 
//   idleTime: 3000,
//   store: store
// }
// Vue.use(IdleVue, idleOptions)

export default store