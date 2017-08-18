<template>

  <main class="container">
    <div class="row">
      <div class="col-9 mail-content-section">
        <button @click="check()" class="btn btn-primary">Check Inbox</button>
        <h5 v-if="user">{{user}}</h5>
        <div v-for="item in userInbox" :key="item.fromEmail">
          <h5>From: {{item.fromEmail}}</h5>
          <h5>Subject: {{item.subject}}</h5>
          <h5>Body: {{item.body}}</h5>
          <span class="sent-date font-300">{{ item.createdAt }}</span>
          <hr />
        </div>
  
      </div>
    </div>
  
  </main>
  
</template>

<script>
  import AccountNavbar from './account-navbar.vue'

  export default {
    name: 'app-inbox',
    components: {
      'app-account-navbar': AccountNavbar
    },
    data() {
      return {
        user: 'Username',
        userInbox: [
          { fromEmail: 'Pac', subject: 'subject', body: 'body', createdAt: new Date() }
        ]
      }
    }
  }
</script>