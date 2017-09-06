<template>
  <div id="app">
    <el-row v-if="windowWidth >= 690">
      <top-navbar></top-navbar>

      <div class="margin-top-80 main-content">
        <router-view></router-view>
      </div>
    </el-row>

    <el-row v-if="windowWidth < 690">
      <side-navbar></side-navbar> 

      <div class="margin-top-80 main-content">
        <router-view></router-view>
      </div>
      <!-- <footer style="background: lightblue" class="footer">
        <div class="container">
          <span class="text-muted">Place sticky footer content here.</span>
        </div>
      </footer> -->
    
    </el-row>
    <!-- <div class="banner">
      <img
        src="https://vuejs.org/images/logo.png"
        width="100"
        alt="vue"
        class="logo"
      />
      <h1>HELLO to Vue.js</h1>
    </div>
    <div class="bottom">
      To get started, edit <code>./src/components/App.vue</code> and save to reload.<br/>
      <span class="fade">
        Checkout <code>./README.md</code> for more usages.
      </span>
    </div> -->
  </div>
</template>

<script>
import getWidthMixin from '@/mixins/GetWindowWidth.vue'

export default {
  mixins: [getWidthMixin],
  name: 'app'
} 
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>
  code {
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    font-size: 0.9em;
    white-space: pre-wrap;
    color: #2c3e50;
  }

  code::before, code::after {
    content: '`';
  }
</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
  #app {
    text-align: center;
  }

  #app h1 {
    color: #2c3e50;
    font-weight: 300;
    margin: 0;
  }

  .banner {
    height: 200px;
    background-color: #f6f6f6;
    padding: 50px 10px;
  }

  .bottom {
    padding: 80px 10px;
    font-size: 24px;
    font-weight: 300;
  }

  .fade {
    font-size: 14px;
    animation: spin 2s 1s infinite linear
  }

  .logo {
    animation: spin 4s 1s infinite linear
  }

  @keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
  }
</style>
