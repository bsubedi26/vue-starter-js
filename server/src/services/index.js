const authentication = require('./authentication/authentication.service.js');
const messages = require('./messages/messages.service.js');
const users = require('./users/users.service.js');
const rooms = require('./rooms/rooms.service.js');
const todos = require('./todos/todos.service.js');
const emails = require('./emails/emails.service.js');

const forumCategories = require('./forum-categories/forum-categories.service.js');

const forumSubcategories = require('./forum-subcategories/forum-subcategories.service.js');

const forumPosts = require('./forum-posts/forum-posts.service.js');

module.exports = function() {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(authentication);
  app.configure(messages);
  app.configure(users);
  app.configure(rooms);
  app.configure(todos);
  app.configure(emails);
  app.configure(forumCategories);
  app.configure(forumSubcategories);
  app.configure(forumPosts);
};
