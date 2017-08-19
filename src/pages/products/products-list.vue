<template>
  <div class="d-flex flex-row flex-wrap justify-content-center">
    <toast :message="toastrMessage" :class="{ show: showToast }"/>
    
    
    <div class="card col-4" v-for="product in products" :key="product.id">
      <div class="row mx-auto">
        <strong>{{product.id}}) {{product.name}}</strong> 
        <b-badge class="m-1" variant="info">${{ product.price }}</b-badge>
      </div>
      <img width="175" height="175" class="mx-auto mt-3" :src="product.src" />
  
      <p class="products-info-text mt-3">{{product.info}}</p>
  
      <!--<div class="row mx-auto">
        <h5 class="col">Price: ${{product.price}}</h5>
        <input v-model="quantity" @input="handleQuantityInputChange(product)" :data-id="product.id" placeholder="Quantity" style="width:60%" class="col form-control mb-3" type="number"/>
      </div>-->
  
      <div class="d-flex flex-column">
      <button @click="addToCart(product)" class="btn btn-primary mb-3 cursor-pointer">Add to Cart</button>
      <button @click="goToDetails(product)" class="btn btn-outline-success mb-3 cursor-pointer">Details</button>
      </div>
    </div>
  
  </div>

</template>

<script>

  export default {
    name: 'products-list',
    data() {
      return {
        msg: 'Products List',
        showToast: false,
        toastrMessage: ''

      }
    },
    methods: {
      handleQuantityInputChange(product) {

      },
      handleQuantityInput(product) {

      },

      addToCart(product) {
        this.$store.dispatch('addToCart', product)
          .then(response => {
            this.toastrMessage = response
            this.showToast = true
            // remove toastr after 3 seconds
            setTimeout(() => { this.showToast = false }, 3000)
          })
      },
      goToDetails(product) {
        this.$router.push(`/products/details/${product.id}`)
      }
    },
    computed: {
      products() {
        return this.$store.getters.productPhones
      }
    }
  }
</script>

<style scoped>

  .products-info-text {
    min-height: 200px;
  }
</style>
