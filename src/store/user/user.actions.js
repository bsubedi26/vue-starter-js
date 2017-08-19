const actions = {
  loginSuccess({ dispatch, commit }, payload) {
    return new Promise(resolve => {
      commit('LOGIN_SUCCESS', payload)
      resolve();
    });
  },
  logout({ commit, dispatch }) {
    // await helpers.delayTimeout(3000);
    return new Promise(resolve => {
      window.localStorage.removeItem("feathers-jwt");
      dispatch('clearCart')
      commit('LOGOUT_SUCCESS');
      resolve();
    });

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
};

export default actions;