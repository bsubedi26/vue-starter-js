<template>
  <div class="navbar-container">
     
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" v-if="!isLoggedIn">
      <el-menu-item @click="handleNavigationClick(navigationLink.path)" :index="navigationLink.id | numberToString" v-for="navigationLink in guestLinks" :key="navigationLink.name">
        {{ navigationLink.name }}
      </el-menu-item>


        
      <el-menu-item index="navbar-cart">
        <navbar-cart></navbar-cart>
      </el-menu-item>

      
    </el-menu>

            
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" v-if="isLoggedIn">
      <el-menu-item @click="handleNavigationClick(navigationLink.path)" :index="navigationLink.id | numberToString" v-for="navigationLink in authLinks" :key="navigationLink.name">
        {{ navigationLink.name }}
      </el-menu-item>

      <el-menu-item index="logout" @click="handleLogout()">
        Logout
      </el-menu-item>

    </el-menu>
     
      <!-- <el-col :span="8">
        <h5>Groups</h5>
        <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
          <el-menu-item-group title="Group One">
            <el-menu-item index="1"><i class="el-icon-message"></i>Navigator One</el-menu-item>
            <el-menu-item index="2"><i class="el-icon-message"></i>Navigator Two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="3"><i class="el-icon-message"></i>Navigator Three</el-menu-item>
            <el-menu-item index="4"><i class="el-icon-message"></i>Navigator Four</el-menu-item>
          </el-menu-item-group>
        </el-menu>
      </el-col> -->
    

  </div>
</template>
<script>
  import NavbarCart from './NavbarCart.vue';
  import NavigationLinksMixin from '../mixins/NavigationLinks.vue';

  export default {
    name: 'top-navbar',
    mixins: [NavigationLinksMixin],
    components: {
      NavbarCart
    },
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
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2000;
}
</style>


