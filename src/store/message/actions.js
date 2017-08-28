export default function makeActions (feathers) {
  const service = feathers.service('messages')

  const actions = {
    find(store, params) {
      const { commit, state, dispatch } = store

      return service.find(params)
        .then(response => {
          commit('setFind', response)
          return Promise.resolve(response)
        })
        .catch(error => {
          commit('setError', error)
          return Promise.reject(error)
        })
    },
  }


  return actions
}