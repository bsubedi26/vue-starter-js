<template>
  <div class="chat-container row">
    <div class="users-list col-md-4">
      <div class="card">
        <h3 class="card-header">40 Users Online!</h3>
        <div class="card-block">
          <h4 class="card-title">Special title treatment</h4>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <div class="messages-list col-md-8">
      MESSAGES
    </div>
  </div>
</template>

<script>
  
  export default {
    name: 'app-chat',

    async mounted() {
      await this.$feathers.authenticate()
      const response = await this.$store.dispatch('users/find')
      // const response = await this.$feathers.service('users').find()
      console.log(response)
    }
  }
</script>