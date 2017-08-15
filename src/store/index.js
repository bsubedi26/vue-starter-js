import Vue from 'vue';
import Vuex from 'vuex';
import feathers from '../util/feathers';
// import createLogger from 'vuex/dist/logger';
import { createVuexLoader } from 'vuex-loading';

const VuexLoading = createVuexLoader({
  // The Vuex module name, 'loading' by default.
  moduleName: 'loading',
  // The Vue component name, 'v-loading' by default.
  componentName: 'v-loading',
  // Vue component class name, 'v-loading' by default.
  className: 'v-loading',
});

Vue.use(Vuex);
Vue.use(VuexLoading);

const appState = {
  count: 0
};

const mutations = {
  INCREMENT(currentState) {
    currentState.count++;
  },
  DECREMENT(currentState) {
    currentState.count--;
  }
};

const actions = {
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit('INCREMENT');
    }, 200);
  },
  userAuthenticate({ state }, payload) {
    console.log('userAuthenticate ', state, payload);
  },
  async userCreate(state, payload) {
    // await delay(cons, 5000);
    // await second();
    // console.log('payload ', payload);
    const userService = feathers.service('users');
    return await userService.create(payload);
  },

};

const store = new Vuex.Store({
  state: appState,
  mutations,
  actions,
  // plugins: [createLogger()]
  plugins: [VuexLoading.Store]
});

export default store;
