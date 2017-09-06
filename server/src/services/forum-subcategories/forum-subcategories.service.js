// Initializes the `forum-subcategories` service on path `/forum-subcategories`
const createService = require('feathers-mongoose');
const createModel = require('../../models/forum-subcategories.model');
const hooks = require('./forum-subcategories.hooks');
const filters = require('./forum-subcategories.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'forum-subcategories',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/forum-subcategories', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('forum-subcategories');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
