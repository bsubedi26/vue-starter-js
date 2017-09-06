<template>
  <div>
    <div class="cart-items">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
  
        <tbody>
  
          <tr v-for="item in cart" :key="item.quantity">
            <td class="text-left">{{ item.product.name }}</td>
            <td>
              <img class="float-left" :src="item.product.src" width="100" height="100" />
            </td>
            
            <td style="width: 10%;">
              <i @click="quantityDecrement(item)" class="cursor-pointer float-left close fa fa-minus"></i>
              {{ item.quantity }}
              <i @click="quantityIncrement(item)" class="cursor-pointer float-right close fa fa-plus"></i>
            </td>
            <td class="text-left">
              {{ item.product.price }}
              <i @click="removeFromCart(item)" class="cursor-pointer close fa fa-times"></i>
            </td>
          </tr>
  
          <tr>
            <td></td>
            <td></td>
            <td>
              <el-button type="info">Checkout</el-button>
            </td>
            <td class="text-left"><strong>Total: ${{ totalPrice }}</strong></td>
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
  name: 'app-products-checkout',
  data() {
    return {

    }
  },

  computed: {
    totalQuantity() {
      return this.$store.getters['product/totalQuantity']
    },
    totalPrice() {
      return this.$store.getters['product/totalPrice']
    },
    cart() {
      return this.$store.getters['product/cart']
    },
  },

  methods: {
    quantityIncrement(product) {
      this.$store.dispatch('product/quantityIncrement', product)
    },
    quantityDecrement(product) {
      this.$store.dispatch('product/quantityDecrement', product)
    },
    removeFromCart(product) {
      this.$store.dispatch('product/removeFromCart', product)
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
