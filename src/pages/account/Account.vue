<template>
  <main>

    <div class="row mt-3">
      <div class="col-3">
        <app-account-navbar></app-account-navbar>
      </div>
    
      <div class="col-8">
        <router-view></router-view>
      </div>
  </div>
  
  </main>
</template>

<script>
import AccountNavbar from './account-navbar.vue'

export default {
  name: 'app-account',
  components: {
    'app-account-navbar': AccountNavbar
  },
  methods: {

  },
  data() {
    return {

    }
  }
}

</script>

<style scoped>

</style>
