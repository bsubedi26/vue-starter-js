import Vue from 'vue'

import Navbar from './Navbar'
import Loader from './Loader.vue'
import Toast from './Toast.vue'
import BootstrapScrollSpy from './bootstrap-scrollspy.vue'
import BootstrapModal from './bootstrap-modal.vue'

Vue.component('navbar', Navbar)
Vue.component('loader', Loader);
Vue.component('toast', Toast);
// Vue.component('bootstrap-scrollspy', BootstrapScrollSpy);
// Vue.component('bootstrap-modal', BootstrapModal);

export default new Vue()