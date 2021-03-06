const fAuthentication = require('feathers-authentication');
const jwt = require('feathers-authentication-jwt');
const local = require('feathers-authentication-local');
const hooks = require('./authentication.hooks');

module.exports = function () {
  const app = this;
  const config = app.get('authentication');

  // Set up authentication with the secret
  app.configure(fAuthentication(config));
  app.configure(jwt());
  app.configure(local(config.local));

  // app.service('authentication').hooks(hooks)

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service('authentication').hooks({
    before: {
      create: [
        fAuthentication.hooks.authenticate(config.strategies)
      ],
      remove: [
        fAuthentication.hooks.authenticate('jwt')
      ]
    }
  });
};