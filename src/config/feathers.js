import feathers from 'feathers/client';
import fHooks from 'feathers-hooks';
import fAuthentication from 'feathers-authentication-client';
import io from 'socket.io-client';
import fSocketio from 'feathers-socketio/client';
import * as rest from 'feathers-rest/client';
import axios from 'axios';

const fClient = feathers();



fClient.configure(fHooks());
const restClient = rest('http://localhost:3030')
// fClient.configure(restClient.axios(axios))
const socket = io('http://localhost:3030');
fClient.configure(fSocketio(socket));
fClient.configure(fAuthentication({
  storage: window.localStorage
}));

export default fClient;