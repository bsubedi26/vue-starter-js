// dynamic service module

import feathers from '@/config/feathers'
import setupMutations from './mutations'
import setupActions from './actions'
// import * as getters from './getters'
import state from './state'

const SERVICES = ['messages', 'todos', 'tasks', 'email']
export default function setupDyanmicService(store) {


  SERVICES.forEach(service => {
    const actions = setupActions(feathers, service)
    const mutations = setupMutations(feathers, service)
    
    store.registerModule(service, {
      namespaced: true,
      state,
      mutations,
      actions,
      // getters
    })
  })
  
}