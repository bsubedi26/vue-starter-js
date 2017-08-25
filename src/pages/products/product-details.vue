<template>

  <div class="d-flex flex-row flex-wrap justify-content-center">
  
    <div class="card col-4 m-4" v-for="product in getProduct" :key="product.id">
      
      <div class="row mx-auto">
        <strong>{{product.id}}) {{product.name}}</strong>
        <b-badge class="m-1" variant="info">${{ product.price }}</b-badge>
      </div>
      <img width="175" height="175" class="mx-auto mt-3" :src="product.src" />
  
      <p class="products-info-text mt-3">{{product.info}}</p>
      
      <button @click="addToCart(product)" class="btn btn-primary mb-3">Add to Cart</button>
      <button @click="goBack()" class="btn btn-outline-success mb-3">Go Back</button>

    </div>
  </div>
  

</template>

<script>


export default {
  name: 'app-product-details',
  data() {
    return {

    }
  },
  mounted() {
    // console.log('$route params ', this.$route.params)
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('addToCart', product)
    },
    goBack() {
      this.$router.go(-1)
    }
  },

  computed: {
    getProduct() {
      const products = this.$store.getters.productPhones
      const result = products.filter(product => product.id == this.$route.params.id)
      return result
    }
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
