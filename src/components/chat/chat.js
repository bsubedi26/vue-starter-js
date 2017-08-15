import Vue from 'vue';
import template from './chat.html';
import feathers from '../../util/feathers';

export default Vue.extend({
  template,
  data() {
    return {
      email: '',
      password: '',
      usernameError: false,
      passwordError: false,
      message: '',
      users: [],
      messages: []
    };
  },
  mounted() {
    feathers.service('users').find()
      .then(u => (this.users = u))
      .catch(res => console.log(res));

    feathers.service('messages').find()
      .then(m => (this.messages = m))
      .catch(res => console.log(res));
  },
  methods: {
    handleSubmit() {
      console.log('this ', this);
      // const { email, password } = this;

    }
  }
});
