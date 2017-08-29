<template>
  <div class="messages-list">
    <div v-for="message in messages" :key="message._id">
      <span><em>[{{ message.userEmail }} || {{ message.createdAt | formatDate }}]:</em> {{ message.text }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-chat-messages-list',
    props: ['messages']
  }
</script>

<style scoped>
  .messages-list {
    max-height: 500px;
    overflow-y: scroll;
    margin-bottom: 20px;
  }
</style>