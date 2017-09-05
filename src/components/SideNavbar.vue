<template>
  <div class="navbar-container">
        <!-- <h5>Groups</h5> -->
        <!-- <el-menu mode="vertical" default-active="1" class="">
          <el-menu-item-group title="Account">
            <el-menu-item @click="handleNavigationClick(navigationLink.path)" index="1"><i class="el-icon-caret-top"></i>Login</el-menu-item>
            <el-menu-item index="2"><i class="el-icon-check"></i>Signup</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Other">
            <el-menu-item index="3"><i class="el-icon-document"></i>Forum</el-menu-item>
            <el-menu-item index="4"><i class="el-icon-message"></i>Chat</el-menu-item>
            <el-menu-item index="5"><i class="el-icon-picture"></i>Products</el-menu-item>
            <el-menu-item index="6"><i class="el-icon-upload2"></i>Checkout</el-menu-item>
          </el-menu-item-group>
        </el-menu> -->

        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
            <el-submenu index="1">
                <template slot="title">Guest Links</template>
                <el-menu-item @click="handleNavigationClick(navigationLink.path)" :index="navigationLink.id | numberToString" v-for="navigationLink in guestLinks" :key="navigationLink.name">
                    {{ navigationLink.name }}
                </el-menu-item>
                <!-- <el-menu-item index="1-1">item one</el-menu-item> -->
                <!-- <el-menu-item index="1-2">item two</el-menu-item> -->
                <!-- <el-menu-item index="1-3">item three</el-menu-item> -->
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">Auth Links</template>
                <el-menu-item @click="handleNavigationClick(navigationLink.path)" :index="navigationLink.id | numberToString" v-for="navigationLink in authLinks" :key="navigationLink.name">
                    {{ navigationLink.name }}
                </el-menu-item>
            </el-submenu>
        </el-menu>

  </div>
</template>
<script>
  import NavigationLinksMixin from '../mixins/NavigationLinks.vue';

  export default {
    name: 'side-navbar',
    mixins: [NavigationLinksMixin],
    data() {
        return {

        };
    },
    methods: {
      handleNavigationClick(path) {
        this.$router.push(path)
      },
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleLogout() {
        // this.$feathers.logout()
        this.$store.dispatch('auth/logout').then(() => this.$router.push('/signup'))
      },

      handleOpen() {

      },

      handleClose() {

      },
  
    },
    computed: {
      isLoggedIn() {
        return this.$store.getters['auth/accessToken']
      },
    },
  }
</script>

<style scoped>
.navbar-container {
  /* position: fixed; */
   top: 0;
   right: 0;
   width: 100%; 
   z-index: 9999; 
}
</style>


