// Initializes the `emails` service on path `/emails`
const createService = require('feathers-mongoose');
const createModel = require('../../models/email.model');
const hooks = require('./email.hooks');
const filters = require('./email.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);

  const options = {
    name: 'email',
    Model,
  };

  // Initialize our service with any options it requires
  app.use('/email', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('email');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
