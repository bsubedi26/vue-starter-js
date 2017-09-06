import { Message } from 'element-ui'

const actions = {
  message(store, payload) {
    return Message(payload);
  },
  addToCart({ dispatch, commit }, product) {
    return new Promise(resolve => {
      commit('ADD_TO_CART', product)
      dispatch('message', {
        showClose: true,
        message: 'Successfully added product to cart.',
        type: 'success'
      })
      
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