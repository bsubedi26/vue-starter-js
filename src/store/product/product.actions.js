const actions = {
  addToCart({ dispatch, commit }, product) {
    return new Promise(resolve => {
      commit('ADD_TO_CART', product)
      resolve('Successfully added to the cart!');
    });
  },

  clearCart({ commit }) {
    return new Promise(resolve => {
      commit('CLEAR_CART')
      resolve('Successfully cleared cart!')
    })
  },

  quantityIncrement({ commit }, product) {
    return new Promise(resolve => {
      commit('QUANTITY_INCREMENT', product)
      resolve('Successfully incremented quantity!')
    })
  },
  quantityDecrement({ commit }, product) {
    return new Promise(resolve => {
      commit('QUANTITY_DECREMENT', product)
      resolve('Successfully decremented quantity!')
    })
  },
  removeFromCart({ commit }, product) {
    return new Promise(resolve => {
      commit('REMOVE_FROM_CART', product)
      resolve('Successfully removed product from cart!')
    })
  }

}

export default actions;