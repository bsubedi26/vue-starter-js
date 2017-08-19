export const productPhones = state => state.phones
export const cart = state => state.cart
export const totalQuantity = state => {
  const quantity = state.cart.reduce((total, item) => {
    total += item.quantity
    return total
  }, 0)
  return quantity
}
export const totalPrice =  state =>  {
  const price = state.cart
  .map((item, index) => {
    const price = item.quantity * item.product.price
    return price.toFixed(2)
  })
  .reduce((total, item) => {
    total += parseInt(item)
    return total
  }, 0)

  return price
}
