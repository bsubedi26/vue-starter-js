// Initializes the `forum/categories` service on path `/forum-categories`
const createService = require('feathers-mongoose');
const createModel = require('../../models/forum-categories.model');
const hooks = require('./forum-categories.hooks');
const filters = require('./forum-categories.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'forum-categories',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/forum-categories', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('forum-categories');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
