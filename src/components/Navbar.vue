<template>
  <b-navbar :toggleable="true" type="light" variant="primary">
<!--
    <div class="menu-icon">
        <b-nav-toggle target="nav_collapse"></b-nav-toggle>
  </div>-->

    <b-navbar-brand href="#">
      <app-navbar-cart></app-navbar-cart>
    </b-navbar-brand>
    
  <!--<b-navbar-brand class="text-white" href="#">VueJS</b-navbar-brand>-->

  <b-nav-form>

      <b-nav-item-dropdown text="Bootstrap Routes">        
        <b-dropdown-item :to="navigationLink.path" v-for="navigationLink in bootstrapExampleLinks" :key="navigationLink.name">
          {{ navigationLink.name }}
        </b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="Main Routes">
        <b-dropdown-item :to="navigationLink.path" v-for="navigationLink in navigationLinks" :key="navigationLink.name">
              {{ navigationLink.name }}
        </b-dropdown-item>
        <b-dropdown-item v-if="isLoggedIn" @click="handleLogout()">
          Logout
        </b-dropdown-item>
      </b-nav-item-dropdown>

  </b-nav-form>


<!--  
    <b-collapse is-nav id="nav_collapse">
      <b-nav is-nav-bar>
        <b-nav-item v-for="navigationLink in navigationLinks" :key="navigationLink.name">
          <router-link  class="text-white" :to="navigationLink.path">{{ navigationLink.name }}</router-link>
        </b-nav-item>
      </b-nav>

        <b-nav is-nav-bar class="ml-auto">
          <b-nav-item-dropdown right>

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
    </b-collapse>-->

    
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
          { name: 'Home', path: '/home' },
          { name: 'Login', path: '/login' },
          { name: 'Signup', path: '/signup' },
          { name: 'Products', path: '/products' },
        ],
        bootstrapExampleLinks: [
          { name: 'Scrollspy', path: '/bootstrap/scrollspy' },
          { name: 'Modal', path: '/bootstrap/modal' },
          { name: 'Table', path: '/bootstrap/table' },
          { name: 'Tabs', path: '/bootstrap/tabs' },
          
        ]
      }
    },

    computed: {
      isLoggedIn() {
        return false
        // return this.$store.getters.accessToken
      },
    },

    methods: {
      handleLogout() {
        this.$store.dispatch('auth/logout').then(() => this.$router.push('/login'))
      },
    }
  }
</script>

<style scoped>

    li {
      list-style-type: none;
    }

</style>
