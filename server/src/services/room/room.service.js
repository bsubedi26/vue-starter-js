// Initializes the `rooms` service on path `/rooms`
const createService = require('feathers-mongoose');
const createModel = require('../../models/room.model');
const hooks = require('./room.hooks');
const filters = require('./room.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);

  const options = {
    name: 'rooms',
    Model,
  };

  // Initialize our service with any options it requires
  app.use('/rooms', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('rooms');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
