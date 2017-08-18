<template>
  <b-navbar toggleable type="light" variant="primary" toggle-breakpoint="md">
  
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
  
    <b-navbar-brand href="#">
      <app-navbar-cart></app-navbar-cart>
    </b-navbar-brand>
  
    <b-collapse is-nav id="nav_collapse">
  
      <b-nav is-nav-bar>
        <b-nav-item v-for="navigationLink in navigationLinks" :key="navigationLink.name">
          <router-link  class="text-white" :to="navigationLink.path">{{ navigationLink.name }}</router-link>
        </b-nav-item>
 
      </b-nav>
  
      <!-- Right aligned nav items -->
      <b-nav is-nav-bar class="ml-auto">
  
        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <span class="text-white"></span>
          </template>

        
          <b-dropdown-item v-if="!isLoggedIn" to="/login">Login</b-dropdown-item>
          <b-dropdown-item v-if="!isLoggedIn" to="/signup">Signup</b-dropdown-item>
          <b-dropdown-item v-if="isLoggedIn" to="/account">Account Settings</b-dropdown-item>
          <b-dropdown-item v-if="isLoggedIn" @click="handleLogout()">
            Logout!
          </b-dropdown-item>
          
        </b-nav-item-dropdown>
      </b-nav>
  
    </b-collapse>
  </b-navbar>


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
        showCart: false,
        navigationLinks: [
          { name: 'Home', path: '/' },
          { name: 'Login', path: '/login' },
          { name: 'Signup', path: '/signup' },
          { name: 'Products', path: '/products' },
        ],
      }
    },

    computed: {
      isLoggedIn() {
        return this.$store.getters.isLoggedIn
      },
      // totalQuantity() {
      //   return this.$store.getters.totalQuantity
      // },
      // totalPrice() {
      //   return this.$store.getters.totalPrice
      // },
      // cart() {
      //   return this.$store.getters.cart
      // },
    },

    methods: {
      handleLogout() {
        this.$feathers.logout()
        this.$store.dispatch('logout').then(() =>this.$router.push('/login'))
      },
      // handleCartClick() {
      //   this.showCart = !this.showCart
      // }
    }
  }
</script>

<style scoped>

</style>
