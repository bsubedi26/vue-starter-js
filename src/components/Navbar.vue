<template>
  <b-navbar style="background: lightblue;" toggleable type="light" toggle-breakpoint="md">
  
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
  
    <b-navbar-brand href="#">
      <app-navbar-cart></app-navbar-cart>
    </b-navbar-brand>
  
    <b-collapse is-nav id="nav_collapse">
  
      <b-nav is-nav-bar v-if="!isLoggedIn">
        <b-nav-item v-for="navigationLink in guestLinks" :key="navigationLink.name">
          <router-link  class="text-white" :to="navigationLink.path">{{ navigationLink.name }}</router-link>
        </b-nav-item>
      </b-nav>

      <b-nav is-nav-bar v-if="isLoggedIn">
        <b-nav-item v-for="navigationLink in authLinks" :key="navigationLink.name">
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
        guestLinks: [
          { name: 'Home', path: '/' },
          { name: 'Login', path: '/login' },
          { name: 'Signup', path: '/signup' },
          { name: 'Products', path: '/products' },
        ],
        authLinks: [
          { name: 'Home', path: '/' },
          { name: 'Products', path: '/products' },
          { name: 'Settings', path: '/account' },
          { name: 'Cart', path: '/products/cart' },
        
        ],
      }
    },

    computed: {
      isLoggedIn() {
        return this.$store.getters.isLoggedIn
      },
    },

    methods: {
      handleLogout() {
        this.$feathers.logout()
        this.$store.dispatch('logout').then(() =>this.$router.push('/login'))
      },
    }
  }
</script>

<style scoped>

</style>
