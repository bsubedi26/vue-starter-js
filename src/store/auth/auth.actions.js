import feathers from '@/config/feathers'

const actions = {
  login(ctx, payload) {
    return feathers.authenticate(payload)
  },
  loginSuccess({ dispatch, commit }, payload) {
    return new Promise(resolve => {
      commit('LOGIN_SUCCESS', payload)
      resolve()
    });
  },
  logout({ commit, dispatch }) {
    return new Promise(resolve => {
      feathers.logout()
      dispatch('clearCart')
      commit('LOGOUT_SUCCESS')
      resolve()
    });

  }
};

export default actions;