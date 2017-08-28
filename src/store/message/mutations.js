export default function makeMutations (feathers) {
  return {
    setFind(state, payload) {
      state.list = payload
    },
    setError(state, payload) {
      state.error = payload
    }
  }
}