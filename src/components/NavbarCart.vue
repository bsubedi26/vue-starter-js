<template>
  <div>
    <i class="fa fa-shopping-cart" @click="handleCartClick()">
    </i>
    <span class="text-white">{{totalQuantity}} items || </span>
    <span class="text-white">Total: ${{totalPrice}}</span>
    
    <div class="cart-items" v-if="showCart">
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
    
        <tbody>
    
          <tr v-for="item in cart" :key="item.quantity">
            <td class="text-white">{{ item.product.name }}</td>
            <td class="text-white">{{ item.quantity }}
              <i class="close fa fa-plus"></i>
            </td>
            <td class="text-white">{{ item.product.price }}</td>
          </tr>
    
          <tr>
            <td></td>
            <td></td>
            <td class="text-white">Total: ${{ totalPrice }}</td>
          </tr>
    
          <!--<button class="clearCart" @click="clearCart()"> Clear Cart </button>
      <button class="checkoutCart" @click="propagateCheckout()"> Checkout </button>
    -->
    
        </tbody>
      </table>
    </div>

  </div>
</template>


<script>
export default {
  name: 'Navbar',
  data() {
    return {
      showCart: false,
    }
  },

  computed: {
    totalQuantity() {
      return this.$store.getters.totalQuantity
    },
    totalPrice() {
      return this.$store.getters.totalPrice
    },
    cart() {
      return this.$store.getters.cart
    },
  },

  methods: {
    handleCartClick() {
      // this.showCart = !this.showCart
      this.$router.push('/products/checkout')
    }
  }
}
</script>

<style scoped>
.fa-shopping-cart {
  color: white;
  font-size: 2em;
}
</style>
