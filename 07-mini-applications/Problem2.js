let cart = [];
function addProduct(...products) {
    for (const product of products) {
        cart.push(product);
    }
}
function removeProduct(productId) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === productId) {
            cart.splice(i, 1);
        }
    }
}
function updateQuantity(productId, quantity) {
    for (const product of cart) {
        if (product.id === productId) {
            product.quantity = quantity;
        }
    }
}


function calculateTotal(cart) {
    let total = 0;
    for (const product of cart) {
        total += product.price * product.quantity;
    }
    return `Total cost ${total}`;
}
function clearCart(cart) {
    cart.length = 0;
}
addProduct({
    id: 1,
    name: "Laptop",
    price: 80000,
    quantity: 1
},
    {
        id: 2,
        name: "Mouse",
        price: 1000,
        quantity: 2
    },
    {
        id: 3,
        name: "Keyboard",
        price: 2500,
        quantity: 1
    },
    {
        id: 4,
        name: "Monitor",
        price: 20000,
        quantity: 1
    },
    {
        id: 5,
        name: "Speaker",
        price: 20000,
        quantity: 1
    });
removeProduct(4);
updateQuantity(2, 5);
updateQuantity(3, 2);
clearCart(cart)
console.log(calculateTotal(cart));
console.log(cart);