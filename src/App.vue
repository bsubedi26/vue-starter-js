<template>
  <div id="app">
    <app-navbar></app-navbar>  
    <img width="100" height="100" src="./assets/logo.png">
    <router-view></router-view>
    <app-footer></app-footer>  
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  text-align: center;
}
</style>
