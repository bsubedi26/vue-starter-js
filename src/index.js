
import Vue from 'vue'
import App from './components/App'
import router from './router/index'
import store from './store/index'

// ****GLOBAL VENDOR STYLE/CSS****
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'element-ui/lib/theme-default/index.css'
import './assets/styles/main.scss'

// ****GLOBAL COMPONENTS****
import Navbar from './components/Navbar.vue'
import SideNavbar from './components/SideNavbar.vue'
import Loader from './components/Loader.vue'
import elModal from './components/Modal.vue'
import ErrorDisplayer from './components/ErrorDisplayer.vue'
import Circle from './components/Circle'
import Icon from 'vue-awesome/components/Icon'

Vue.component('top-navbar', Navbar);
Vue.component('side-navbar', SideNavbar);
Vue.component('loader', Loader);
Vue.component('modal', elModal);
// Vue.component('app-error-displayer', ErrorDisplayer);
Vue.component('app-circle', Circle);
Vue.component('icon', Icon)

// ****GLOBAL FILTERS****
import * as filters from './filters'
Vue.filter('numberToString', filters.numberToString)
Vue.filter('formatDate', filters.formatDate)


// ****GLOBAL PLUGINS****
import ElementUI from 'element-ui'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'

Vue.use(ElementUI)
// Vue.use(MintUI)

// ****GLOBAL CONFIG****
// import feathers from '@/config/feathers'
// import stylings from '@/config/stylings'
// Vue.prototype.$feathers = feathers


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
