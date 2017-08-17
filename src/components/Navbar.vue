<template>
  <b-navbar toggleable type="light" variant="primary" toggle-breakpoint="md">
  
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
  
    <b-navbar-brand href="#">NavBar</b-navbar-brand>
  
    <b-collapse is-nav id="nav_collapse">
  
      <b-nav is-nav-bar>
        <b-nav-item v-for="navigationLink in navigationLinks" :key="navigationLink.name">
          <router-link  class="text-white" :to="navigationLink.path">{{ navigationLink.name }}</router-link>
        </b-nav-item>
 

      </b-nav>
  
      <!-- Right alignd nav items -->
      <b-nav is-nav-bar class="ml-auto">
  
        <!--<b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>-->
  
        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <span class="text-white"></span>
          </template>

        
          <b-dropdown-item v-if="!isLoggedIn" to="/login">Login</b-dropdown-item>
          <b-dropdown-item v-if="!isLoggedIn" to="/signup">Signup</b-dropdown-item>
          <b-dropdown-item v-if="isLoggedIn" to="#">Account Settings</b-dropdown-item>
          <b-dropdown-item v-if="isLoggedIn" @click="handleLogout()">
            Logout!
          </b-dropdown-item>
          
        </b-nav-item-dropdown>
      </b-nav>
  
    </b-collapse>
  </b-navbar>


</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        navigationLinks: [
          { name: 'Home', path: '/' },
          { name: 'Login', path: '/login' },
          { name: 'Signup', path: '/signup' },
        ]
      }
    },

    computed: {
      isLoggedIn() {
        return this.$store.getters.isLoggedIn
      }
    },

    methods: {
      handleLogout() {
        this.$store.dispatch('logout')
      }
    }
  }
</script>