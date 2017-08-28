// auth module

import setupMutations from './mutations'
import setupActions from './actions'
import feathers from '@/config/feathers'

export default function setupAuthModule (store) {

  const options = {
    idField: '_id',
    auth: {
      namespace: 'auth',
      userService: '/users'
    }
  }

  const { auth } = options
  const { namespace } = auth
  const state = {
    accessToken: undefined, // The JWT
    user: undefined,
    payload: undefined, // The JWT payload
  }
  // If a userService string was passed, add a user attribute
  if (auth.userService) {
    // state.user = undefined
  }
  const combinedState = Object.assign(state, auth.state)
  const mutations = setupMutations(feathers, options)
  const actions = setupActions(feathers, options)
  store.registerModule(namespace, {
    namespaced: true,
    state: combinedState,
    mutations,
    actions
  })
}