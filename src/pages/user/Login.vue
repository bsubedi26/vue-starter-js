<template>

  <div class="login">
  <b-alert variant="danger" show v-if="serviceError">
    {{ serviceError.message }}
  </b-alert>

  <div class="card text-center">
    <div class="card-header"></div>
    <div class="card-block">
      <h4 class="card-title"> {{ cardHeader }}</h4>
      <icon name="search"></icon>

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
      Don't have an Account? 
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
      serviceError: null
    }
  },
  methods: {
    handleSubmit(email, password) {
      this.$startLoading('user/login')
      console.log(email, password)
      // this.$store.dispatch("login", {
      this.$feathers.authenticate({
        strategy: 'local',
        email: this.email,
        password: this.password
      })
      .then((res) => {
        console.log('.then ', res)
        this.$store.dispatch('loginSuccess', res)
        this.$endLoading('user/login');
        this.$router.push("/account")
      })
      .catch((err) => {
        console.log('.catch ', err)
        this.serviceError = err
        this.$endLoading('user/login')
        // this.$router.push("/")
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
