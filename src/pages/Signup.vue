<script>
export default {
  name: 'signup',
  data() {
    return {
      anyLoading: false,
      jumbotronHeader: 'Account Signup',
      cardHeader: 'Signup Below',
      email: '',
      password: '',
      serviceError: null
    }
  },
  methods: {
    handleSubmit(email, password) {
      this.$startLoading('user/signup')
      // this.$store.dispatch("signup", {
      this.$feathers.service('users').create({
        email: this.email,
        password: this.password
      })
      .then((doc) => {
        console.log('.then ', doc)
        this.$endLoading('user/signup')
        this.$router.push("/login")
      })
      .catch((error) => {
        console.log('.catch ', error)
        this.$endLoading('user/signup')
        this.serviceError = error
      })
    }
  },
  mounted() {

  }
}
</script>

<template>
  <div class="signup">
      
    <b-alert variant="danger" show v-if="serviceError">
      {{ serviceError.message }}
    </b-alert>
  
    <!--<div class="row">
        <div class="col-12 col-6-tablet push-3-tablet text-center heading jumbotron">
          <h1 class="font-100">{{ jumbotronHeader }}</h1>
        </div>
      </div>-->
  
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
          <button :disabled="errors.any()" type="submit" class="btn btn-outline-primary btn-block">Submit</button>

        </form>
        <loader v-if="$isLoading('user/signup')" />
      </div>
      <div class="card-footer text-muted">
        Already have an Account?
        <router-link to="/login"><span class="text-primary">Login here.</span></router-link>
      </div>
    </div>
  
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
