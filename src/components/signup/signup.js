// import Vue from 'vue';
import template from './signup.html';

export default {
  components: {

  },
  template,
  data() {
    return {
      email: '',
      password: '',
      // usernameError: false,
      // passwordError: false,
      // message: ''
    };
  },
  methods: {
    handleSubmit() {
      const { email, password } = this;
      // console.log('this ', this);
      this.$store.dispatch('userCreate', { email, password })
      .then(res => console.log('.then ', res))
      .catch(res => console.log('.catch ', res));
      // const { email, password } = this;
      // feathers.service('users')
      // .create({ email, password })
      // .then(res => console.log(res))
      // .catch(res => console.log(res));
      // console.log('this.password ', this.password);

      // if (this.email === 'admin' && this.password === 'admin') {
      //   this.message = 'Login Successful!';
      // } else {
      //   this.usernameError = true;
      //   this.passwordError = true;
      // }
    }
  }
};
