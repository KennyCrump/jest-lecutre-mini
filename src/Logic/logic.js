const axios = require('axios');

const logic = {
  toggle(bool) {
    return !bool
  },
  addToCart(product, cart) {
    let productCopy = {...product}
    let cartCopy = [...cart]
    let indexOfProduct = cartCopy.findIndex((item) => {
      return item.id === product.id})
    if(indexOfProduct === -1){
      productCopy.qty = 1
      cartCopy.push(productCopy)
    }else{
      cartCopy[indexOfProduct].qty++
    }
    return cartCopy
  },
  calculateSubTotal(product) {
    let subtotal = product.qty * product.price
      return subtotal.toFixed(2)
  },
  calculateTotal(cart) {
    let total = cart.reduce((total, item) => {
      return (total + (item.qty * item.price))
    }, 0)
    return total.toFixed(2)
  },
  removeItem() {
    // Build me!
  },
};

module.exports = logic;
