<template>
  <div>

    <el-row>
      <!-- USER INFORMATION CIRCLE TOP LEFT  -->
      <el-col :span="4">
        <app-circle class="bg-darkBlue m-3" :style="{ 
          'width': '200px', 
          'height': '200px'
        }">
        <div class="inside-circle">
            <img src="http://via.placeholder.com/75x75" class="mb-2" />
            <!-- <img v-if="currentUser.avatar" :src="currentUser.avatar" class="mb-2" /> -->
            <br />
            <span v-if="currentUser">User: {{ currentUser['email'] }}</span>
            Location: USA
        </div>
      </app-circle>
      </el-col>

      <el-col :span="15">
        <messages-list class="message-list" :messages="messages"></messages-list>
      </el-col>

      <el-col :span="5">
        <user-list ref="usersList" class="users-list" :users="users"></user-list>
      </el-col>

    </el-row>

    <el-row class="m-3">
      <el-col v-if="currentUser" :span="6">
        <el-button @click="handleLogout" type="info">Logout</el-button>
      </el-col>

      <el-col :span="18">
        <!-- <mt-spinner type="snake"></mt-spinner> -->
        <!-- <mt-actionsheet
          :actions="actions"
          v-model="sheetVisible"
          cancelText="Cancel"
        > 
        </mt-actionsheet> -->
        <el-form @keyup.enter.native="handleSubmit(messageForm)" ref="messageForm" :model="messageForm">
          <el-form-item prop="message">
            <el-input @keydown.enter.prevent="handleSubmit(messageForm)" style="width: 75%;" v-model="message" type="text" name="text" placeholder="Message"></el-input>
            <el-button @click.prevent="handleSubmit(messageForm)" type="primary">Submit</el-button>
          </el-form-item>
        </el-form>
      </el-col>

    </el-row>

  </div>
</template>

<script>
import UserList from './user-list.vue'
import MessagesList from './messages-list.vue'
import { Message } from 'element-ui';

export default {
  name: 'app-chat',
  components: {
    'user-list': UserList,
    'messages-list': MessagesList,
  },
  data() {
    return {
      sheetVisible: true,
      actions: [
        {name: 'First', method: function() { console.log('first') }},
        {name: 'Second', method: function() { console.log('second') }},
      ],
      message: '',
      messageForm: {
        message: ''
      }
    }

  },
  methods: {
    _scrollBottom() {
      const messageList = this.$el.querySelector(".message-list");
      messageList.scrollTop = messageList.scrollHeight;
    },
    async handleSubmit() {
      this.sheetVisible = !this.sheetVisible
      // const res = await this.$store.dispatch('message/create', { text: this.message })
      this._scrollBottom()
    },
    async handleLogout() {
      const authResponse = await this.$store.dispatch('auth/logout')
      this.$router.push('/login')
    },
    async mounted() {
      console.log('mounted')
      // Toast({
      //   message: 'Upload Complete',
      //   position: 'bottom',
      //   duration: 5000
      // });

      // Indicator.open({
      //   text: 'Loading...',
      //   spinnerType: 'fading-circle'
      // });
      try {
        await this.$store.dispatch('auth/authenticate')
        // await this.$store.dispatch('users/find')
        // await this.$store.dispatch('message/find')
        this._scrollBottom()
      }
      catch (error) {
        console.log(this)
        return Message({
          showClose: true,
          message: 'You must be authenticated first.',
          type: 'error',
        });
      }
    },
  },

    computed: {
      currentUser() {
        return this.$store.getters['auth/user']
      },
      users() {
        return this.$store.getters['users/list']
      },
      messages() {
        return this.$store.getters['message/list']
      }
    }
}

</script>

<style scoped>
  .users-list {
    max-height: 500px;
    overflow-y: scroll;
    margin-bottom: 20px;
  }
  .inside-circle {
    padding: 30px;
    color: white;
    font-size: 18px;
  }
</style>