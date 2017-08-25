<template>

  <div class="login">
  <b-alert variant="danger" show v-if="serviceError">
    {{ serviceError.message }}
  </b-alert>
  <div class="card text-center">
    <div class="card-header"></div>
    <div class="card-block">
      <h4 class="card-title"> {{ cardHeader }}</h4>
          
      <form class="mx-auto" style="width: 768px;" @submit.prevent="handleSubmit(email, password)" novalidate>

        <fieldset :class="{ 'has-danger': errors.has('email') }">
          <input v-model="email" v-validate="{ rules: { required: true } }" :class="{'form-control-danger': errors.has('email') }" class="form-control" type="text" name="email" placeholder="Email"></input>
        </fieldset>
        <span v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</span>
        <hr />
        <fieldset :class="{ 'has-danger': errors.has('password') }">
          <input v-model="password" v-validate="{ rules: { required: true } }" :class="{'form-control-danger': errors.has('password') }" class="form-control" type="password" name="password" placeholder="Password"></input>
        </fieldset>
        <span v-show="errors.has('password')" class="text-danger">{{ errors.first('password') }}</span>
          <hr />
        <button :disabled="errors.any()" type="submit" class="btn btn-primary btn-block">Submit</button>
        
      </form>
      <loader v-if="$isLoading('user/login')" />

    </div>
    <div class="card-footer text-muted">
      {{ signupText }}
      <router-link to="/signup"><span class="text-primary">Signup here.</span></router-link>
    </div>
  </div>

  </div>
</template>

<script>

export default {
  name: 'login',
  data() {
    return {
      jumbotronHeader: 'Account Login',
      cardHeader: 'Login Below',
      email: '',
      password: '',
      serviceError: undefined,
      signupText: "Don't have an Account?"
    }
  },
  methods: {
    handleSubmit(email, password) {
      this.$startLoading('user/login')
      // this.$store.dispatch("login", { strategy: 'local', email, password })
      this.$store.dispatch('auth/authenticate', { strategy: 'local', email, password })
      .then((response) => {
        // this.$store.dispatch('loginSuccess', response)
        this.$endLoading('user/login')
        this.$router.push("/home")
      })
      .catch((error) => {
        this.serviceError = error
        this.$endLoading('user/login')
      });
    }
  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
