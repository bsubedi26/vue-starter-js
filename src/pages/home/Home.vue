<template>
  
  <div class="home">
    <!-- <modal /> -->

    <el-row type="flex" class="row-bg">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="end">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>



    <div class="row justify-content-center" style="background: lightblue">
      <div class="col-md">
        <h3>Crypto Currencies</h3>
      </div>
    </div>

      <!-- <div class="d-flex flex-row flex-wrap justify-content-center"> -->
      <!-- <div class="row">
        <div class="card col-md-3" v-for="currency in cryptoCurrencies" :key="currency.id">
          <div class="row mx-auto">
            <strong>{{currency.rank}}) {{currency.name}}</strong> 
          </div>
            
        </div>
    
    </div> -->

  </div>

</template>

<script>


export default {
  name: 'hello',
  data() {
    return {

    }
  },

  
  computed: {
    cryptoCurrencies() {
      return this.$store.getters.cryptoCurrencies
    }
  },
  mounted() {
    // this.$store.dispatch('getCryptoCurrencies')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home { 
   overflow-x: hidden;
}
.products-info-text {
  min-height: 200px;
}
img {
  width: 100px;
  height: 100px;
  /* border: 2px red solid; */
  margin: -30px;
}
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}






  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
