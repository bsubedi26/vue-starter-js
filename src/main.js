import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


// ****GLOBAL VENDOR STYLE/CSS****
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/styles/main.scss'
import 'vue-awesome/icons'
import 'element-ui/lib/theme-default/index.css'


// ****GLOBAL COMPONENTS****
import Navbar from './components/Navbar.vue'
import Loader from './components/Loader.vue'
import Toast from './components/Toast.vue'
import Modal from './components/Modal.vue'
import Icon from 'vue-awesome/components/Icon'
Vue.component('navbar', Navbar);
Vue.component('loader', Loader);
Vue.component('toast', Toast);
Vue.component('modal', Modal);
Vue.component('icon', Icon);


// ****GLOBAL FILTERS****
import * as filters from './filters'
Vue.filter('toString', filters.toString)


// ****GLOBAL PLUGINS****
import BootstrapVue from 'bootstrap-vue'
import ElementUI from 'element-ui'
import VeeValidate, { Validator } from 'vee-validate'

Vue.use(BootstrapVue)
Vue.use(ElementUI)
Vue.use(VeeValidate)


// ****GLOBAL CONFIG****
import feathers from '@/config/feathers'
import dictionary from '@/config/validate-rules'
Validator.updateDictionary(dictionary)
Vue.prototype.$feathers = feathers

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})