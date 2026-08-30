function generateInvoice(customer, products) {
    let subtotal = 0;
    for (const product of products) {
        subtotal += product.price * product.quantity;
    }
    let tax = subtotal * 0.10;
    let finalTotal = subtotal + tax;

    return {
        customer: {
            name: customer.name,
            email: customer.email
        },
        subtotal,
        tax,
        finalTotal
    }
}
const customer = {
    name: "Rahim Ahmed",
    email: "rahim@example.com"
};

const products = [
    { name: "Laptop", price: 80000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2500, quantity: 1 }
];

console.log(generateInvoice(customer, products));