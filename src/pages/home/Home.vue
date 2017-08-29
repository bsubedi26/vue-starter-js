<template>

  <div style="max-width: 768px;" class="mx-auto">

    <div class="d-flex">
      <div class="col-md-6">
        <!-- <bootstrap-carousel /> -->
      </div>

      <div class="col-md-6">
        <!-- <bootstrap-carousel /> -->
      </div>

    </div>

    <div class="jumbotron">
      {{ user }}
    </div>
  </div>

</template>

<script>


export default {
  name: 'hello',
  data() {
    return {
      slide: 0,
    }
  },

  
  computed: {
    user() {
      return this.$store.getters['auth/user']
    }
  },
  mounted() {
    // this.$store.dispatch('todo/find')
    // .then(res => {
    //  console.log(res)
    // })
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
