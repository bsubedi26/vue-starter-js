export default function makeMutations(feathers, namespace) {
  const mutations = {
    [namespace+'/startFind'](state, payload) {
      console.log('*****startFind*****')
    },
    [namespace + '/setFind'](state, payload) {
      console.log('*****setFind*****', payload)
      console.log('*****setFind*****', state)
      state.list = payload
    }
  }
  return mutations
}