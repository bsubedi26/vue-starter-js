<template>

  <div class="d-flex flex-row flex-wrap justify-content-center">
  
    <div class="card col-4 m-4" v-for="product in getProduct" :key="product.id">
      <strong>{{product.id}}) {{product.name}}</strong>
      <img width="175" height="175" class="mx-auto mt-3" :src="product.src" />
  
      <p class="products-info-text mt-3">{{product.info}}</p>
  
      <div class="row mx-auto">
        <h5 class="col">Price: ${{product.price}}</h5>
        <input placeholder="Quantity" style="width:60%" class="col form-control mb-3" type="number" v-model="quantity" />
      </div>
      
      <button @click="addToCart(product, quantity)" class="btn btn-primary mb-3">Add to Cart</button>
      <button @click="goBack()" class="btn btn-outline-success mb-3">Go Back</button>

    </div>
  </div>
  

</template>

<script>


export default {
  name: 'app-product-details',
  data() {
    return {
      quantity: ''
    }
  },
  mounted() {
    console.log('$route params ', this.$route.params)
  },
  methods: {
    addToCart(product, quantity) {
      console.log(product, quantity)
      // this.$store.dispatch('addToCart', arguments)
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
