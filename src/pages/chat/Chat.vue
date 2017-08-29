<template>
  <div>
    <el-row>
      <el-col :span="6">
        <user-list class="users-list" :users="users"></user-list>
      </el-col>
      <el-col :span="18">
        <messages-list :messages="messages"></messages-list>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="6">
        <el-button type="success">Logout</el-button>
      </el-col>

      <el-col :span="18">
        <el-form @keyup.enter.native="handleSubmit(messageForm)" ref="messageForm" :model="messageForm">
          <el-form-item prop="message">
            <el-input
              @keydown.enter.prevent="handleSubmit(messageForm)"
              style="width: 75%;"
              v-model="messageForm.message" 
              type="text" name="text" placeholder="Message" 
            ></el-input>
          <el-button @click.prevent="handleSubmit(messageForm)" type="primary">Submit</el-button>
          </el-form-item>
        </el-form>
      </el-col>

    </el-row>
    
  </div>
</template>

<script>
  import UserList from './user-list'
  import MessagesList from './messages-list'

  export default {
    name: 'app-chat',
    components: {
      'user-list': UserList,
      'messages-list': MessagesList,
    },

    data() {
      return {
        messageForm: {
          message: ''
        }
      }
    },
    methods: {
      handleSubmit(form) {
        const { message } = form
      }
    },
    computed: {
      users() {
        return this.$store.getters['users/list']
      },
      messages() {
        return this.$store.getters['message/list']
      }
    },
    async mounted() {
      await this.$store.dispatch('auth/authenticate')
      await this.$store.dispatch('users/find')
      await this.$store.dispatch('message/find')
    }
  }
</script>

<style scoped>
  .users-list {
    max-height: 500px;
    overflow-y: scroll;
    margin-bottom: 20px;
    /* border: 2px red solid;     */
  }
</style>