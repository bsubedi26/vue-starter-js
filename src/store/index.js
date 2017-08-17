import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import VuexLoading from './plugins/loader';

Vue.use(Vuex)
Vue.use(VuexLoading)

const store = new Vuex.Store({
  modules: {
    user
  },
  plugins: [VuexLoading.Store],
})

export default store