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
  deleteAccountSuccess({ dispatch }) {
    return new Promise(resolve => {
      dispatch('logout')
      resolve()
    });
  },
};

export default actions;