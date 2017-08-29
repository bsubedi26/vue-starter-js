// dynamic service module

import feathers from '@/config/feathers'
import setupMutations from './mutations'
import setupActions from './actions'
import * as getters from './getters'
import state from './state'

// export default function setupDyanmicService(serviceName) {
//   return store => {
//     const actions = setupActions(feathers, serviceName)
//     const mutations = setupMutations(feathers, serviceName)
    
//     store.registerModule(serviceName, {
//       namespaced: true,
//       state,
//       mutations,
//       actions,
//       getters
//     })
//   }
  
// }

export default function(serviceName) {
  const actions = setupActions(feathers, serviceName)
  const mutations = setupMutations(feathers, serviceName)
  return {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  }
}