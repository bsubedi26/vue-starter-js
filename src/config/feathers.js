import feathers from 'feathers/client';
import fHooks from 'feathers-hooks';
import fAuthentication from 'feathers-authentication-client';
import io from 'socket.io-client';
import fSocketio from 'feathers-socketio/client';
import * as rest from 'feathers-rest/client';
import axios from 'axios';


function getHost() {
  const HOST = (process.env.NODE_ENV === 'development') 
  ? 'http://localhost:3030' 
  : location.origin.replace(/^http/, 'ws')

  return HOST
}

const app = feathers();
// const restClient = rest('http://localhost:3030')
const socket = io(getHost());

app
  .configure(fHooks())
  // .configure(restClient.axios(axios))
  .configure(fSocketio(socket))
  .configure(fAuthentication({
    storage: window.localStorage
  }));

export default app;