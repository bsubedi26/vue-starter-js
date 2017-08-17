const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const socketio = require('feathers-socketio');
const GithubStrategy = require('passport-github').Strategy;
const oauth2 = require('feathers-authentication-oauth2');

const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');

// const authentication = require('./services/authentication');

const mongoose = require('./mongoose');

const app = feathers();

// Load app configuration
app.configure(configuration(path.join(__dirname, '..')));
// Enable CORS, security, compression, favicon and body parsing
app.use(cors());
app.use(helmet());
app.use(compress());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(favicon(path.join(app.get('public'), 'favicon.ico')));
// Host the public folder
// app.use('/', feathers.static(app.get('public')));

// Set up Plugins and providers
app.configure(hooks());
app.configure(mongoose);
app.configure(rest());
app.configure(socketio( io => {
  io.on('connection', function (socket) {
    console.log('socket::init::connection');
    socket.emit('connection', { hello: 'world' });
  });
}));

// Set up our services (see `services/index.js`)
app.configure(services);
// app.configure(oauth2({
//   name: 'github',
//   Strategy: GithubStrategy,
//   clientID: app.get('oAuth').github.id,
//   clientSecret: app.get('oAuth').github.secret,
//   scope: ['user']
// }))
// Configure middleware (see `middleware/index.js`) - always has to be last
app.configure(middleware);
app.hooks(appHooks);

module.exports = app;