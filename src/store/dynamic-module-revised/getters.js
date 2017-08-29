// export const list = (state) => state.list

export default function makeGetters(serviceName) {
  return {
    list(state) {
      return state.list
    }
  }
}