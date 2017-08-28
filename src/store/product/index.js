import * as getters from './product.getters'
import actions from './product.actions'
import mutations from './product.mutations'
import state from './product.state'

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}