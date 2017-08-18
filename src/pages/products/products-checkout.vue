<template>
  <div>

    <div class="cart-items">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
  
        <tbody>
  
          <tr v-for="item in cart" :key="item.quantity">
            <td class="text-left">{{ item.product.name }}</td>
            
            <td style="border: 1px blue solid; width: 10%;"class="">
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
    quantityIncrement(product) {
      this.$store.dispatch('quantityIncrement', product)
    },
    quantityDecrement(product) {
      this.$store.dispatch('quantityDecrement', product)
    },
    removeFromCart(product) {
      console.log('cmp')
      this.$store.dispatch('removeFromCart', product)
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
