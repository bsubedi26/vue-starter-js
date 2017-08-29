export default function makeMutations(feathers, serviceName) {
  const mutations = {
    [serviceName + '/startFind'](state, payload) {
      console.log('*****startFind*****')
    },
    [serviceName + '/setFind'](state, payload) {
      console.log('*****setFind***** payload ', payload)
      console.log('state', state)
      state.list = payload
    }
  }
  return mutations
}