const mutations = {
  ADD_TO_CART(state, payload) {
    const { product, quantity } = payload
    const itemInCart = state.cart.find(item => item.product.id == product.id)
    if (itemInCart) {
      console.log('ITEM IN CART', itemInCart)
      itemInCart.quantity += quantity
    }
    else {
      console.log('NOT IN CART')
      state.cart.push(payload)
    }
  },
  REMOVE_FROM_CART(state) {

  }
};

export default mutations;