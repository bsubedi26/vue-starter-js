<template>
  <div class="mx-auto" style="width: 75%;">
    <h3 class="text-left text-primary">Change Password</h3>
    <hr />
    
    <b-alert variant="danger" show v-if="serviceError">
      {{ serviceError }}
    </b-alert>
    
     <form @submit.prevent="handleSubmit(oldpass, newpass)" novalidate>

        <fieldset :class="{ 'has-danger': errors.has('oldpass') }">
          <input v-model="oldpass" v-validate="{ rules: { required: true } }" :class="{'form-control-danger': errors.has('oldpass') }" class="form-control" type="password" name="oldpass" placeholder="Old Password"></input>
        </fieldset>
        <span v-show="errors.has('oldpass')" class="float-left text-danger">{{ errors.first('oldpass') }}</span>
        <hr />
        <fieldset :class="{ 'has-danger': errors.has('newpass') }">
          <input v-model="newpass" v-validate="{ rules: { required: true } }" :class="{'form-control-danger': errors.has('newpass') }" class="form-control" type="password" name="newpass" placeholder="New Password"></input>
        </fieldset>
        <span v-show="errors.has('newpass')" class="float-left text-danger">{{ errors.first('newpass') }}</span>
        <hr />
        <button :disabled="errors.any()" type="submit" class="btn btn-primary btn-inline">Change Password</button>
      </form>

      <div class="mt-5">
        <h3 class="text-left text-danger">Delete Account</h3>
        <hr />
        <p class="text-danger">Warning! Proceed with caution. Once you delete your account, there is no going back.</p>
        <button @click="handleDeleteAccountClick()" type="submit" class="btn btn-outline-danger btn-inline">Delete your account</button>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'app-account-settings',
    data() {
      return {  
        oldpass: '',
        newpass: '',
        serviceError: undefined
      }
    },
    mounted() {
    
    },
    methods: {
      handleSubmit(oldpass, newpass) {
        const credentials = { strategy: 'local', email: this.email, password: oldpass }
        this.$feathers.authenticate(credentials)
          .then(response => {
            this.$feathers.service('users')
            .patch(this.userId, { password: newpass })
            .then(res => console.log('res ', res))
            .catch(res => console.log('res ', res))
          })
          .catch(response => {
            console.log('.catch ', response)
            this.serviceError = 'There was an issue. Try again.'
          })
      },
      handleDeleteAccountClick() {
        this.$feathers.service('users')
        .remove(this.userId)
        .then(res => {
          this.$store.dispatch('deleteAccountSuccess')
          .then(res => {
            this.$router.push('/login')
          })
          console.log('res ', res)
        })
        .catch(res => console.log('res ', res))
      }
    },
    computed: {
      userId() {
        return this.$store.getters.userId
      },
      email() {
        return this.$store.getters.email
      }
    }
  }
</script>
