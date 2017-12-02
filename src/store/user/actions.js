import axios from 'axios'

const API = {
  USER: 'http://localhost:7001/auth/user'
}

const actions = {
  register ({ commit }, user) {
    const payload = { name: user.email, email: user.email, password: user.password }
    return axios.post(`${API.USER}/register`, payload).then(res => {
      commit('SET_USER', res.data)
      return res
    })
  },
  login ({ commit }, user) {
    return axios.post(`${API.USER}/login`, user).then(res => {
      commit('SET_USER', res.data)
      return res
    })
  },
  logout ({ commit }) {
    return axios.get(`${API.USER}/logout`).then(res => {
      commit('SET_USER', null)
      return res
    })
  },


}

export default actions;