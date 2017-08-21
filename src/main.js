import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import App from './App'
import router from './router'
import store from './store'
import Navbar from './components/Navbar.vue';
import Loader from './components/Loader.vue';
import Toast from './components/Toast.vue';
import Modal from './components/Modal.vue';
import feathers from '@/config/feathers';
import dictionary from '@/config/validate-rules';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/styles/main.scss'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
      
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// GLOBAL COMPONENTS
Vue.component('navbar', Navbar);
Vue.component('loader', Loader);
Vue.component('toast', Toast);
Vue.component('modal', Modal);
Vue.component('icon', Icon);

// PLUGINS
Vue.use(BootstrapVue);
Vue.use(ElementUI)
Vue.use(VeeValidate);
Validator.updateDictionary(dictionary);
Vue.prototype.$feathers = feathers;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created() {
    // this.$store.dispatch('xxxx')
  }
})
