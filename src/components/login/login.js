import Vue from 'vue';
import template from './login.html';
// import feathers from '../../util/feathers';

/* VUE VALIDATE
Vue validate plugin adds the errors object which exposes a few methods:
first(‘field’): Fetches the first error message associated with that field.
collect(‘field’): Fetches all error messages associated with that field.
has(‘field’): Checks if there are any errors associated with that field.
all(): Gets all error messages.
any(): Checks if there are any errors.
*/

export default Vue.extend({
  template,
  components: {

  },
  data() {
    return {
      email: '',
      password: '',
      usernameError: false,
      passwordError: false,
      message: ''
    };
  },
  methods: {
    handleSubmit() {
      console.log('this ', this.$feathers);
      this.$store.dispatch('userAuthenticate', { a: 'payload' });
      // const { email, password } = this;
      // feathers.authenticate({ email, password, strategy: 'local' })
      // .then(res => console.log(res))
      // .catch(res => console.log(res));
      // if (this.email === 'admin' && this.password === 'admin') {
      //   this.message = 'Login Successful!';
      // } else {
      //   this.usernameError = true;
      //   this.passwordError = true;
      // }
    }
  }
});
