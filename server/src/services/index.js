const authentication = require('./authentication/authentication.service.js');
const messages = require('./message/message.service.js');
const users = require('./user/user.service.js');
const rooms = require('./room/room.service.js');
const todos = require('./todo/todo.service.js');
const emails = require('./email/email.service.js');

module.exports = function() {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(authentication);
  app.configure(messages);
  app.configure(users);
  app.configure(rooms);
  app.configure(todos);
  app.configure(emails);
};
