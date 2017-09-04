<template>
  <div id="app">
    <navbar></navbar>  
    <!-- <app-error-displayer /> -->
    <!-- <img width="100" height="100" src="./assets/logo.png"> -->
    <router-view></router-view>

    <!-- <footer style="background: lightblue" class="footer">
      <div class="container">
        <span class="text-muted">Place sticky footer content here.</span>
      </div>
    </footer> -->
    
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
