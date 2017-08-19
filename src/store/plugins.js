const examplePlugin = store => {
  store.subscribe((mutation, state) => {
    // console.log('MUTATION!! ', mutation)
    // console.log('STATE!! ', state)
    // if (mutation.type === 'CLEAR_ALL_DATA') {
    //   localStorage.removeItem(STORAGE_KEY)
    // }
  })
}

export default examplePlugin