import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'

// ****GLOBAL VENDOR STYLE/CSS****
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/styles/main.scss'
import 'vue-awesome/icons'
import 'element-ui/lib/theme-default/index.css'

// ****GLOBAL COMPONENTS****
import Navbar from './components/Navbar.vue'
import SideNavbar from './components/SideNavbar.vue'
import Loader from './components/Loader.vue'
import elModal from './components/Modal.vue'
import ErrorDisplayer from './components/ErrorDisplayer.vue'
import Circle from './components/Circle'

// import elIcon from 'vue-awesome/components/Icon'
Vue.component('top-navbar', Navbar);
Vue.component('side-navbar', SideNavbar);
Vue.component('loader', Loader);
Vue.component('modal', elModal);
// Vue.component('icon', elIcon);
Vue.component('app-error-displayer', ErrorDisplayer);
Vue.component('app-circle', Circle);



// ****GLOBAL FILTERS****
import * as filters from './filters'
Vue.filter('numberToString', filters.numberToString)
Vue.filter('formatDate', filters.formatDate)


// ****GLOBAL PLUGINS****
import BootstrapVue from 'bootstrap-vue'
import ElementUI from 'element-ui'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VeeValidate, { Validator } from 'vee-validate'

Vue.use(BootstrapVue)
Vue.use(ElementUI)
Vue.use(MintUI)
Vue.use(VeeValidate, {
  errorBagName: 'errors', 
  fieldsBagName: 'inputs', // property conflicts: DEFAULT was fields
})


// ****GLOBAL CONFIG****
import feathers from '@/config/feathers'
import stylings from '@/config/stylings'
import dictionary from '@/config/validate-rules'
Validator.updateDictionary(dictionary)
Vue.prototype.$feathers = feathers
Vue.prototype.$stylings = stylings;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
