const mutations = {
  LOGIN_SUCCESS(state, payload) {
    const { accessToken, user } = payload
    state.credentials = user;
  },
  LOGOUT_SUCCESS(state) {
    state.credentials = {}
  }
};

export default mutations;