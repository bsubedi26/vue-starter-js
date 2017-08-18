const mutations = {
  LOGIN_SUCCESS(state, payload) {
    const { accessToken, user } = payload
    state.isLoggedIn = true;
    state.accessToken = accessToken;
    state.credentials = user;
  },
  LOGOUT_SUCCESS(state) {
    state.accessToken = null
    state.credentials = {}
    state.isLoggedIn = false
  }
};

export default mutations;