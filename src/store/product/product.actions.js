const actions = {
  addToCart({ dispatch, commit }, payload) {
    return new Promise(resolve => {
      commit('ADD_TO_CART', payload)
      resolve('Successfully added to the cart!');
    });
  },

}

export default actions;