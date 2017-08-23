<template>
  <div>
    
        
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" v-if="!isLoggedIn">
      
      <el-menu-item :index="navigationLink.id | toString " v-for="navigationLink in guestLinks" :key="navigationLink.name">
          <router-link class="text-white" :to="navigationLink.path">{{ navigationLink.name }}</router-link>
      </el-menu-item>
<!-- 
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Settings</template>
        <el-menu-item index="2-1">Profile</el-menu-item>
        <el-menu-item index="2-2">Account Settings</el-menu-item>
        <el-menu-item index="2-3">Logout</el-menu-item>
      </el-submenu>
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
      -->
    </el-menu>
    <div class="line"></div>

    


  </div>
</template>
<script>
  import NavbarCart from './NavbarCart';

  export default {
    name: 'Navbar',
    components: {
      'app-navbar-cart': NavbarCart
    },
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',

        showCart: false,
        guestLinks: [
          { id: 1, name: 'Home', path: '/' },
          { id: 2, name: 'Forum', path: '/forum' },
          { id: 3, name: 'Login', path: '/login' },
          { id: 4, name: 'Signup', path: '/signup' },      
          { id: 5, name: 'Products', path: '/products' },
        ],
        authLinks: [
          { id: 1, name: 'Home', path: '/' },
          { id: 2, name: 'Forums', path: '/forums' },
          { id: 3, name: 'Products', path: '/products' },
          { id: 4, name: 'Settings', path: '/account' },
          { id: 5, name: 'Cart', path: '/products/cart' },
        
        ],
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleLogout() {
        this.$feathers.logout()
        this.$store.dispatch('logout').then(() =>this.$router.push('/login'))
      },
  
    },
    computed: {
      isLoggedIn() {
        return this.$store.getters.isLoggedIn
      },
    },
  }
</script>

