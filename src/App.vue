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
    
  </div>
</template>

<script>
import getWidthMixin from './mixins/GetWindowWidth.vue'

export default {
  mixins: [getWidthMixin],
  data() {
    return {

    }
  },
  name: 'app'
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  text-align: center;
}

@media screen and (min-width: 690px) {
.main-content {
    /* border: 2px yellow solid; */
     margin-top: 150px; 
  }
}

@media screen and (max-width: 689px) {
.main-content {
    /* border: 2px red solid; */
    margin-top: 150px;
  }
}

</style>
