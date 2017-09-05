<template>
  <div class="signup mt-3">

    <el-card style="max-width:550px;margin:auto;">
      <el-alert class="p-2 mb-3" v-if="serviceError"
        :title="serviceError.message"
        type="error"
        show-icon>
      </el-alert>

      <h4 class="card-title"> {{ cardHeader }}</h4>

      <el-form @keyup.enter.native="handleSubmit(signupForm)" ref="signupForm" :model="signupForm" :rules="rules">
        <el-form-item label="Email Address" prop="email">
          <el-input
            v-model="signupForm.email" 
            type="text" name="email" placeholder="Email" 
          ></el-input>
        </el-form-item>
        
        <el-form-item label="Password" prop="password">
          <el-input
            v-model="signupForm.password" 
            type="password" name="password" placeholder="Password" 
          ></el-input>
        </el-form-item>
          
        <el-form-item class="text-left">
            <div class="text-muted">
              Already have an Account?
              <router-link to="/login"><span class="text-primary">Login here.</span></router-link>
            </div>
        </el-form-item>
        
        <el-button @click="handleSubmit(signupForm)" :loading="loading" style="width:222px;" type="primary" size="large">Submit</el-button>

      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'app-signup',
  data() {
    return {
      jumbotronHeader: 'Account Signup',
      cardHeader: 'Signup Below',
      serviceError: null,
      loading: false,
      signupForm: {
        email: '',
        password: ''
      },
      rules: {
        email: [
            { required: true, message: 'Please input an Email Address' },
            // { min: 3, message: 'Length should be atleast 3 characters' }
        ],
        password: [
          { required: true, message: 'Please enter your password' },
          // { min: 6, message: 'Your password is too short!' },
        ],
      },
    }
  },
  methods: {
    handleSubmit(form) {
      const { email, password } = form
      this.loading = true
      this.$store.dispatch('users/create', { email, password })
      // this.$feathers.service('users').create({
      //   email: email,
      //   password: password
      // })
      .then((doc) => {
        console.log('.then ', doc)
        this.loading = false
        this.$router.push("/login")
      })
      .catch((error) => {
        console.log('.catch ', error)
        this.loading = false
        this.serviceError = error
      })
    }
  },
  mounted() {

  }
}
</script>

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
