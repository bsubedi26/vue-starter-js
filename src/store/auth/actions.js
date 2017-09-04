import axios from 'axios';

export default function makeAuthActions (feathers, options) {
  const { auth } = options


  const actions = {

    async deleteAccount(store, _id) {
      const response = await feathers.service('users').remove(_id)
      store.dispatch('logout')
      return Promise.resolve(response)
    },
    async changePassword (store, credentials) {
      const userService = feathers.service('users')
      const { email, oldpass, newPassword, _id } = credentials
      console.log('cred', credentials)
      const results = await axios.post('localhost:3030/verify-user-credentials', { _id, email, password: oldpass })
      // const results = await userService.find({ query: { email, password: oldpass }})
      // const results = await feathers.authenticate({ strategy: 'local', email: email, password: 'XZXCCXD' })
      console.log('ressefef',results)
      const result = await userService.update(_id, { email: email, password: newPassword })
      console.log('res' ,result)
      return Promise.resolve(result)
    },
    authenticate (store, data) {
      const { commit, state, dispatch } = store

      commit('setAuthenticatePending')
      if (state.errorOnAuthenticate) {
        commit('clearAuthenticateError')
      }
      return feathers.authenticate(data)
        .then(response => {
          commit('setAccessToken', response.accessToken)

          // Decode the token and set the payload, but return the response
          return feathers.passport.verifyJWT(response.accessToken)
            .then(payload => {
              commit('setPayload', payload)

              // Populate the user if the userService was provided
              if (auth.userService && payload.hasOwnProperty('userId')) {
                return dispatch('populateUser', payload.userId)
                  .then(() => {
                    commit('unsetAuthenticatePending')
                    return response
                  })
              } else {
                commit('unsetAuthenticatePending')
              }
              return response
            })
        })
        .catch(error => {
          commit('setAuthenticateError', error)
          commit('unsetAuthenticatePending')
          return Promise.reject(error)
        })
    },

    populateUser ({ commit }, userId) {
      return feathers.service(auth.userService)
        .get(userId)
        .then(user => {
          commit('setUser', user)
          return user
        })
    },

    logout ({commit}) {
      commit('setLogoutPending')
      return feathers.logout()
        .then(response => {
          commit('logout')
          commit('unsetLogoutPending')
          return response
        })
        .catch(error => {
          return Promise.reject(error)
        })
    }
  }


  return actions
}