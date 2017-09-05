const bcrypt = require('bcryptjs');
const errors = require('feathers-errors');

function _comparePassword(string, hashed) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(string, hashed, (error, result) => {
      if (error) {
        console.log('***bcrypt compare password error!***')
        resolve(false)
      } else if (result) {
        console.log('***correct password!***')
        resolve(true)
      } else {
        console.log('***wrong password!***')
        resolve(false)
      }
    });
  })
}

exports.comparePassword = function () {
  return async hook => {
    const { oldpass, newpass } = hook.data
    const { user } = hook.params
    // console.log('user ', user)

    const isPasswordValid = await _comparePassword(oldpass, user.password)
    if (isPasswordValid) {
      // console.log('hook data', hook.data)
      // hook.data.password = newpass
      return hook
    } else {
        throw new errors.BadRequest('Incorrect password.')
    }
  }
}
