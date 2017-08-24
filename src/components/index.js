import Vue from 'vue'

import Navbar from './Navbar'
import Footer from './Footer'
import Loader from './Loader.vue'
import Toast from './Toast.vue'
import BootstrapScrollSpy from './bootstrap-scrollspy.vue'
import BootstrapModal from './bootstrap-modal.vue'

Vue.component('app-navbar', Navbar)
Vue.component('app-footer', Footer)
Vue.component('loader', Loader)
Vue.component('toast', Toast)
// Vue.component('bootstrap-scrollspy', BootstrapScrollSpy);
// Vue.component('bootstrap-modal', BootstrapModal);

export default new Vue()