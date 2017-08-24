<template>
  <div class="mx-auto products-container">
      
    <b-btn v-b-modal="'modal1'">Show Example Modal</b-btn>
    <b-modal id="modal1">
      Hello From Modal 1!
    </b-modal>

    <products-list />
  </div>
</template>

<script>
import ProductsList from './products-list.vue';

export default {
  name: 'app-products',
  components: {
    "products-list": ProductsList
  },
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
.products-container {
  /*max-width: 992px;*/
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
</style>
