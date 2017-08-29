// dynamic service module
import feathers from '@/config/feathers'
import setupMutations from './mutations'
import setupActions from './actions'
// import * as getters from './getters'
import setupGetters from './getters'
import state from './state'

export default function setupDyanmicService(serviceName) {
  return store => {

    const actions = setupActions(feathers, serviceName)
    const mutations = setupMutations(feathers, serviceName)
    const getters = setupGetters(serviceName)
    
    store.registerModule(serviceName, {
      namespaced: true,
      state,
      mutations,
      actions,
      getters
    })
  }
}
