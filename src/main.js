import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from './App'
import router from './router'
import store from './store'
import Navbar from './components/Navbar.vue';
import Loader from './components/Loader.vue';

// Vue.config.productionTip = false;

// import Mint from 'mint-ui'
// import 'mint-ui/lib/style.css'

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// GLOBAL COMPONENTS
Vue.component('navbar', Navbar);
Vue.component('loader', Loader);

// PLUGINS
// Vue.use(Mint);
Vue.use(BootstrapVue);
Vue.use(VeeValidate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
