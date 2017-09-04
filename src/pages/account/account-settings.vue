<template>
  <div class="mx-auto" style="width: 75%;">
    <h3 class="text-left text-primary">Change Password</h3>
    <hr />
    
    <b-alert variant="danger" show v-if="serviceError">
      {{ serviceError }}
    </b-alert>
    
     <form @submit.prevent="handleChangePasswordSubmit(oldpass, newpass)" novalidate>

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
        <button @click="handleDeleteAccountSubmit()" type="submit" class="btn btn-outline-danger btn-inline">Delete your account</button>
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
      async handleChangePasswordSubmit(oldpass, newPassword) {

        const credentials = { _id: this.user._id, email: this.user.email, oldpass, newPassword }
        console.log(credentials)
        // const response = await this.$store.dispatch('auth/authenticate', credentials)
        const response = await this.$store.dispatch('auth/changePassword', credentials)
        console.log(response)
        // await this.$store.dispatch('users/update', this.userId, { password: newpass })
            // .patch(this.userId, { password: newpass })
            // .then(res => console.log('res ', res))
            // .catch(res => console.log('res ', res))
          // .catch(response => {
          //   console.log('.catch ', response)
          //   this.serviceError = 'There was an issue. Try again.'
          // })
      },
      async handleDeleteAccountSubmit() {
        
        try {
          const response = await this.$store.dispatch('auth/deleteAccount', this.userId)
          // this.$store.dispatch('deleteAccountSuccess')
          this.$router.push('/login')
      
        } catch (err) {
          console.log(err)
        }
        
      }
    },
    computed: {
      userId() {
        return this.$store.getters.userId
      },
      user() {
        return this.$store.getters['auth/user']
      }
    }
  }
</script>
