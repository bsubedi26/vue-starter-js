'use strict';

const { authenticate } = require('feathers-authentication').hooks;
const { hashPassword } = require('feathers-authentication-local').hooks;
const { Verifier } = require('feathers-authentication-local');
const commonHooks  = require('feathers-hooks-common');
const gravatar = require('../../hooks/gravatar');

const { comparePassword}  = require('../../hooks/authentication/compare-password');

module.exports = {
  before: {
    all: [],
    find: [ 
      authenticate('jwt'),
      hashPassword(),
    ],
    get: [ authenticate('jwt') ],
    create: [hashPassword(), gravatar()],
    update: [ authenticate('jwt'), hashPassword() ],
    patch: [ authenticate('jwt'), comparePassword(), hashPassword() ],
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
