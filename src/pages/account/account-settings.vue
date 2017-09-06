<template>
  <div class="mx-auto" style="width: 75%;">
    <h3 class="text-left text-primary">Change Password</h3>
    <hr />
    
    <b-alert variant="danger" show v-if="serviceError">
      {{ serviceError }}
    </b-alert>
    
     <form @submit.prevent="handleChangePasswordSubmit(oldpass, newpass)" novalidate>

        <fieldset :class="{ 'has-danger': false }">
          <input v-model="oldpass" :class="{'form-control-danger': false }" class="form-control" type="password" name="oldpass" placeholder="Old Password"></input>
        </fieldset>
        <span v-show="false" class="float-left text-danger">{{ false }}</span>
        <hr />
        <fieldset :class="{ 'has-danger': false }">
          <input v-model="newpass" :class="{'form-control-danger': false }" class="form-control" type="password" name="newpass" placeholder="New Password"></input>
        </fieldset>
        <span v-show="false" class="float-left text-danger">{{ false }}</span>
        <hr />
        <button :disabled="false" type="submit" class="btn btn-primary btn-inline">Change Password</button>
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
        const response = await this.$store.dispatch('auth/changePassword', credentials)
      },
      async handleDeleteAccountSubmit() {
        try {
          const response = await this.$store.dispatch('auth/deleteAccount', this.user._id)
          // this.$store.dispatch('deleteAccountSuccess')
          this.$router.push('/login')
        } catch (err) {
          console.log(err)
        }
      }
    },
    computed: {
      user() {
        return this.$store.getters['auth/user']
      }
    }
  }
</script>
