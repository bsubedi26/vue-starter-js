<template>

  <div style="max-width: 768px;" class="mx-auto">
    <div class="jumbotron">
      Welcome to VueJS!
    </div>
    <bootstrap-carousel />
    <div class="jumbotron">
    </div>
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

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
