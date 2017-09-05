const mutations = {
  ADD_TO_CART(state, product) {
    const itemInCart = state.cart.find(item => item.product.id == product.id)
    if (itemInCart) {
      itemInCart.quantity += 1
    }
    else {
      const payload = { product, quantity: 1 }
      state.cart.push(payload)
    }
  },
  REMOVE_FROM_CART(state, payload) {
    console.log('rm ', payload)
    const itemInCart = state.cart.find(item => item.product.id == payload.product.id)
    if (itemInCart) {
      state.cart = state.cart.filter(item => item != itemInCart)
    }
  },
  QUANTITY_INCREMENT(state, payload) {
    const itemInCart = state.cart.find(item => item.product.id == payload.product.id)
    if (itemInCart) {
      itemInCart.quantity += 1
    }
  },
  QUANTITY_DECREMENT(state, payload) {
    const itemInCart = state.cart.find(item => item.product.id == payload.product.id)
    if (itemInCart) {
      // remove item from cart if quantity decreases to zero
      if (itemInCart.quantity == 1) {
        state.cart = state.cart.filter(item => item != itemInCart)
      } else {
        itemInCart.quantity -= 1
      }
    }
  },
  CLEAR_CART(state) {
    state.cart = []
  }
};

export default mutations;