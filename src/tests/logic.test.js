const { toggle, getProducts, addToCart, calculateSubTotal, calculateTotal, removeItem } = require('../Logic/logic');

const product = {
  id: 1,
  product: 'Fillets',
  price: 69.41,
  image: 'http://goodtogostore.com/product-package-images/192837494.jpg',
};
const productCopy = {
  id: 10,
  qty: 3,
  product: 'Fillets',
  price: 69.41,
  image: 'http://goodtogostore.com/product-package-images/192837494.jpg',
}

const myCart = [{
  id: 10,
  qty: 3,
  product: 'Fillets',
  price: 69.41,
  image: 'http://goodtogostore.com/product-package-images/192837494.jpg'
}, {
  id: 100,
  qty: 2,
  product: 'Fillets',
  price: 69.40,
  image: 'http://goodtogostore.com/product-package-images/192837494.jpg'
}]

describe('Tests Toggle Show button', () => {
  test('if given true, return false', () => {
    expect(toggle(true)).toBe(false)
  })
  test('if given false, return true', () => {
    expect(toggle(false)).toBe(true)
  })
  test('if given string with text, return false', () => {
    expect(toggle('hey there')).toBe(false)
  })
  test('if given empty string, return true', () => {
    expect(toggle('')).toBe(true)
  })
})

describe('Can add item to cart', () => {
  let cart = []
  beforeEach(() => {
    cart = []
  })
  
  test('can add item to the cart', () => {
    expect(addToCart(product, cart)).toHaveLength(1)
  })
  test('returns an array', () => {
    let newCart = addToCart(product, cart)
    expect(Array.isArray(newCart)).toBeTruthy()
  })
  test('added items have quantity property', () =>{
    expect(addToCart(product, cart)[0]).toHaveProperty('qty')
  })
  test('updates quantity with repeat item', () => {
    let newCart = addToCart(product, cart)
    expect(addToCart(product, newCart)).toHaveLength(1)
  })

  test("original product doesn't have quantity", () => {
    addToCart(product, cart)
    expect(product).not.toHaveProperty('qty')
  })

  test("returned array should be new array", () => {
    expect(addToCart(product, cart)).not.toEqual(cart)
  })

  test('if added second unique item, length should be 2', () => {
    let newCart = addToCart(product, cart);
    expect(addToCart({name: 'balloons', id: 50}, newCart)).toHaveLength(2)
  })

});

describe('can calculate sub total', () => {
  test('product has quantity', () => {
    expect(productCopy).toHaveProperty('qty')
  })
  test('', () => {
    expect(productCopy).toHaveProperty('price')
  })
  test('', () => {
    expect(calculateSubTotal(productCopy)).not.toBeNaN()
  })
  test('', () => {
    expect(calculateSubTotal(productCopy)).toBe('208.23')
  })
});

describe('can calculate Total', () => {
  test('can calculate total', () => {
    expect(calculateTotal(myCart)).toBe('347.03')
  })
});

describe('can remove item', () => {});
