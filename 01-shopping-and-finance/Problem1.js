function calculateCartTotal(cart){
     let total_price = 0;
    for (const el of cart) {
        total_price += el.price * el.quantity;
    }
    return total_price;
}
const cart = [
  {
    name: "Laptop",
    price: 80000,
    quantity: 2
  },
  {
    name: "Mouse",
    price: 1000,
    quantity: 3
  },
  {
    name: "Keyboard",
    price: 2500,
    quantity: 1
  }
];
const totalPrice = calculateCartTotal(cart);
console.log(totalPrice);
