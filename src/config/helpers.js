import app from './feathers'

function delayTimeout(timer) {
  return new Promise(resolve => setTimeout(resolve, timer))
}

// function configureFeathersVuex(store) {
//   app.configure(feathersVuex(store, {
//     idField: '_id',
//     auth: {
//       userService: '/users'
//     }
//   }))

//   app.service('/users')
//   app.service('/messages')
//   app.service('/todos')
// }

export {
  delayTimeout,
  // configureFeathersVuex
}