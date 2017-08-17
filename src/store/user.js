import helpers from './helpers';

const state = {
  accessToken: null,
  isLoggedIn: localStorage.getItem('token')
}

const actions = {
  login({ dispatch, commit }, credentials) {
    return new Promise(resolve => {
      setTimeout(() => {
        localStorage.setItem("token", "JWT");
        commit('LOGIN_SUCCESS');
        resolve();
      }, 1500);
    });
  },
  async logout({ commit }) {
    console.log('before delay');
    await helpers.delayTimeout(3000);
    localStorage.removeItem("token");
    console.log('delay');
    commit('LOGOUT_SUCCESS');
  },
  signup({ dispatch, commit }, credentials) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        localStorage.setItem("token", "JWT");
        commit('LOGIN_SUCCESS');
        reject('Invalid Signup');
      }, 1500);
    });
  },
}

const mutations = {
  LOGIN_SUCCESS(state) {
    state.isLoggedIn = true;
  },
  LOGOUT_SUCCESS(state) {
    state.isLoggedIn = false;
  }
}

const getters = {
  isLoggedIn: (state) => {
    return state.isLoggedIn
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}