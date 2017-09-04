<template>
  <div>
        
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" v-if="!isLoggedIn">
      <el-menu-item @click="handleNavigationClick(navigationLink.path)" :index="navigationLink.id | numberToString" v-for="navigationLink in guestLinks" :key="navigationLink.name">
        {{ navigationLink.name }}
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

  </div>
</template>
<script>
  import NavbarCart from './NavbarCart';

  export default {
    name: 'Navbar',
    data() {
      return {
        activeIndex: '1',
        guestLinks: [
          { id: 1, name: 'Home', path: '/' },
          { id: 2, name: 'Forum', path: '/forum' },
          { id: 3, name: 'Login', path: '/login' },
          { id: 4, name: 'Signup', path: '/signup' },      
          { id: 5, name: 'Products', path: '/products' },
          { id: 6, name: 'Chat', path: '/chat' },      
        ],
        authLinks: [
          { id: 1, name: 'Home', path: '/' },
          { id: 2, name: 'Forums', path: '/forums' },
          { id: 3, name: 'Products', path: '/products' },
          { id: 4, name: 'Settings', path: '/account' },
          { id: 5, name: 'Login', path: '/login' },
          { id: 6, name: 'Signup', path: '/signup' },      
          { id: 7, name: 'Chat', path: '/chat' },      
        
        ],
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

