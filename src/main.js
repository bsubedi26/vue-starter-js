import Vue from 'vue';
import store from './store';
import { LoadingState } from 'src/config/loading-state';
import Navigation from 'components/navigation/navigation';
import feathers from './util/feathers';

import 'src/config/http';
import routes from 'src/routes';
import 'src/style.scss';

/////////////////////////////////////////////////////////////
/////////////////////////PLUGINS/////////////////////////////
/////////////////////////////////////////////////////////////
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import VeeValidate from 'vee-validate';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VeeValidate);

/////////////////////////////////////////////////////////////
////////////////////GLOBAL COMPONENTS////////////////////////
/////////////////////////////////////////////////////////////
import Spinner from 'components/spinner/spinner.vue';
import Loader from 'components/Loader/loader.vue';
Vue.component('spinner', Spinner);
Vue.component('loader', Loader);

/////////////////////////////////////////////////////////////
/////////////////////////APP INIT////////////////////////////
/////////////////////////////////////////////////////////////
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
});

Vue.prototype.$feathers = feathers;

new Vue({
  router,
  store,
  components: {
    Navigation,
  },

  data(){
    return {
      isLoading: false
    };
  },

  created(){
    LoadingState.$on('toggle', (isLoading) => {
      this.isLoading = isLoading;
    });
  }
}).$mount('#app');
