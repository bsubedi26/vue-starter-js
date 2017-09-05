// Initializes the `forum-posts` service on path `/forum-posts`
const createService = require('feathers-mongoose');
const createModel = require('../../models/forum-posts.model');
const hooks = require('./forum-posts.hooks');
const filters = require('./forum-posts.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'forum-posts',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/forum-posts', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('forum-posts');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
