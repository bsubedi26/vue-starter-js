<template>
  <div class="chat-container row">
    <div class="users-list col-md-4">
      <div class="card">
        <h3 class="card-header"><span class="text-success">{{ userList.length }}</span> Users Online!</h3>
        <div class="card-block" v-for="user in userList" :key="user._id">
          <!--<h4 class="card-title">************</h4>-->

          <div class="row p-3">
            <img :src="user.avatar" width="70" height="70" />
            <p class="card-text ml-3">Email: {{ user.email }}</p>
          </div>
  
        </div>
      </div>
    </div>
    <div class="messages-list col-md-8">

      <div v-for="message of messageList" :key="message.id">
  
              
        <div class="message flex flex-row">
          <!--<img :src="message.user.avatar || placeholder" :alt="message.user.email" class="avatar">-->
          <div class="message-wrapper">
            <p class="message-header">
              <!--<span class="username font-600">{{ message.user.email }}</span>-->
              <!--<span class="sent-date font-300">{{ formattedDate }}</span>-->
            </p>
            <p class="message-content font-300">{{ message.text }}</p>
          </div>
        </div>
        
      </div>


      <form class="message-form" v-on:submit.prevent="onSubmit(msgInput)">
        <input v-model="msgInput" class="form-control" />
      </form>

    </div>
  </div>
</template>

<script>
  
  export default {
    name: 'app-chat',
    methods: {
      onSubmit(input) {
        this.$feathers.service('messages').create({ text: input })
      }
    },
    computed: {
      messageList: function() {
        return this.$store.getters['message/list']
      },
      userList: function () {
        return this.$store.getters['users/list']
      }
    },
    data() {
      return {
        msgInput: '',
        messages: []
      }
    },

    async mounted() {
      await this.$store.dispatch('auth/authenticate')
      await this.$store.dispatch('users/find')
      await this.$store.dispatch('message/find')
      // message.subscribe(response => {
      //   this.messages = response
      // })
      // console.log(messageResponse)
      // this.$feathers.service('messages').find()
      //   .subscribe(response => {
      //     console.log('setFind', response)
      //   })
    }
  }
</script>

<style scoped>
  .users-list {
    overflow-y: scroll;
    height: 100vh;
  }
  
  .messages-list {
    overflow-y: scroll;
    height: 100vh;
  }
  .message-form {
    border: 2px red solid;
    /*position: fixed;*/
    /*top: 0;*/
  }

</style>
