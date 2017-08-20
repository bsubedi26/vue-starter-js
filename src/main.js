import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import App from './App'
import router from './router'
import store from './store'
import Navbar from './components/Navbar.vue';
import Loader from './components/Loader.vue';
import Toast from './components/Toast.vue';
import ProductsList from './pages/products/products-list.vue';
import feathers from '@/config/feathers';
import dictionary from '@/config/validate-rules';

// Vue.config.productionTip = false;

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/styles/main.scss'

// GLOBAL COMPONENTS
Vue.component('navbar', Navbar);
Vue.component('loader', Loader);
Vue.component('toast', Toast);
Vue.component('products-list', ProductsList);

// PLUGINS
Vue.use(BootstrapVue);
Vue.use(VeeValidate);
Validator.updateDictionary(dictionary);
Vue.prototype.$feathers = feathers;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
