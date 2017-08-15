import Vue from 'vue';
import template from './navigation.html';

export default Vue.extend({
  template,

  data() {
    return {
      navigationLinks: [
        { name: 'Home', path: '/' },
        { name: 'Posts', path: '/posts' },
        { name: 'Create Post', path: '/posts/create' },
        { name: 'Login', path: '/login' },
        { name: 'Signup', path: '/signup' },
        { name: 'Chat', path: '/chat' },
      ]
    };
  }
});
