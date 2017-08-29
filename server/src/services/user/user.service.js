// Initializes the `users` service on path `/users`
const createService = require('feathers-mongoose');
const createModel = require('../../models/user.model');
const hooks = require('./user.hooks');
const filters = require('./user.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);

  const options = {
    name: 'users',
    Model,
  };

  // Initialize our service with any options it requires
  app.use('/users', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('users');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
