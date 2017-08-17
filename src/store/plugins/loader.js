import { createVuexLoader } from 'vuex-loading'

const VuexLoading = createVuexLoader({
  // The Vuex module name, 'loading' by default.
  moduleName: 'loading',
  // The Vue component name, 'v-loading' by default.
  componentName: 'v-loading',
  // Vue component class name, 'v-loading' by default.
  className: 'v-loading',
});

export default VuexLoading