<template>
  
    <ul class="no-list-decoration">
      <li v-for="navigation in navigations" class="nav-item active" :key="navigation.name">
        <router-link class="nav-link" :to="navigation.path">{{navigation.name}}</router-link>
        <!--<a class="nav-link cursor-pointer" @click="handleRouteClick(navigation)">{{navigation.name}}</a>-->
        <hr />
      </li>
    </ul>

</template>


<script>
export default {
  name: 'app-account-navbar',
  methods: {
    handleRouteClick(navigation) {
      console.log(navigation)
    }
  },
  data() {
    return {
      navigations: [
        { path: '/account', name: 'Main' },
        { path: '/account/inbox', name: 'Inbox' },
        { path: '/account/settings', name: 'Settings' },
        // { path: 'sent', name: 'Sent' },
        // { path: 'trash', name: 'Trash' },
      ]

    }
  }
}

</script>

<style scoped>
.no-list-decoration {
  list-style: none;
}
</style>
