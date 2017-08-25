import feathers from 'feathers/client';
import fHooks from 'feathers-hooks';
import fAuthentication from 'feathers-authentication-client';
import io from 'socket.io-client';
import fSocketio from 'feathers-socketio/client';
import * as rest from 'feathers-rest/client';
import axios from 'axios';
import feathersVuex from 'feathers-vuex';

const app = feathers();


app.configure(fHooks());
const restClient = rest('http://localhost:3030')
// app.configure(restClient.axios(axios))
const socket = io('http://localhost:3030');
app.configure(fSocketio(socket));
app.configure(fAuthentication({
  storage: window.localStorage
}));

export default app;