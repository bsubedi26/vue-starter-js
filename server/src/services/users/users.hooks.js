'use strict';

const { authenticate } = require('feathers-authentication').hooks;
const { hashPassword } = require('feathers-authentication-local').hooks;
const { Verifier } = require('feathers-authentication-local');
const commonHooks  = require('feathers-hooks-common');
const gravatar = require('../../hooks/gravatar');
const bcrypt = require('bcryptjs');
const { hasher } = require('../authentication/hasher');
const errors = require('feathers-errors');

// function checkIfPasswordMatch() {
//   return async hook => {
//     console.log('beforeFindUser::hook ', hook.data)
//     const { email, password, newPassword } = hook.data
//     console.log(hook.data)
//     const userFound = await hook.app.service('users').find({ query: { email } })
//     if (userFound[0]) {
//       console.log(userFound[0])
//       const hash = userFound[0].password
//       bcrypt.compare(password, hash, function (error, result) {
//         if (error) { 
//           console.log(error) 
//           throw new errors.BadRequest('Invalid Credentials.');
//         }
//         if (!result) {
//           console.log('Password incorrect');
//           throw new errors.BadRequest('Invalid Credentials.');
//           // return Promise.reject(hook)
//         }
//         console.log('Password correct ', result)
//         hasher(newPassword).then(hashed => {
//           hook.data.password = hashed
//           return Promise.resolve(hook);
//         })
//       })
        
//     }
    // console.log('beforeFindUser::hook ', Object.keys(hook))
        // return new Promise((resolve, reject) => {
        //   // bcrypt.compare(password, hash, function (error, result) {
        //     // Handle 500 server error.
        //     if (error) {
        //       return reject(error);
        //     }
    
        //     if (!result) {
        //       debug('Password incorrect');
        //       return reject(false);
        //     }
    
        //     debug('Password correct');
        //     return resolve(entity);
        //   });

  // }
// }


module.exports = {
  before: {
    all: [],
    find: [ 
      authenticate('jwt'),
      hashPassword(),
    ],
    get: [ authenticate('jwt') ],
    create: [hashPassword(), gravatar()],
    update: [ authenticate('jwt'),hashPassword() ],
    patch: [ authenticate('jwt'), hashPassword() ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [commonHooks.when(hook => hook.params.provider, commonHooks.discard('password'))],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
