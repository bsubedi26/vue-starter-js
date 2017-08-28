import setupMutations from './mutations'
import setupActions from './actions'
import * as getters from './getters'
import state from './state'
import feathers from '@/config/feathers'

export default function setupModule(store) {

  const options = {
    
  }


  const mutations = setupMutations(feathers)
  const actions = setupActions(feathers)
  
  store.registerModule('message', {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  })
}