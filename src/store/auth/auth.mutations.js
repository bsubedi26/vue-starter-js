const mutations = {
  LOGIN_SUCCESS(state, payload) {
    const { accessToken, user } = payload
    state.accessToken = accessToken
    state.isLoggedIn = true
  },
  LOGOUT_SUCCESS(state) {
    state.accessToken = undefined
    state.isLoggedIn = false
  }
};

export default mutations;