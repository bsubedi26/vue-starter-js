export default function makeActions(feathers, serviceName) {
  const actions = {
    find(store, params) {
      const { commit, state, dispatch } = store
      console.log(`${serviceName}/startFind`)
      
      // commit(`${serviceName}/startFind`)
      return feathers.service(serviceName).find(params)
        .then(response => {
          console.log(`${serviceName}/setFind`, response)
          commit(`${serviceName}/setFind`, response)
          return Promise.resolve(response)
        })
        .catch(error => {
          commit(`${serviceName}/setError`, error)
          return Promise.reject(error)
        })
    },

  }


  return actions
}