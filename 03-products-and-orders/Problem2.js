function getOutOfStockProducts(products) {
    let productStock = [];
    for (const product of products) {
        if (product.stock === 0) {
            productStock.push(product);
        }
    }
    return productStock;
}

const products = [
    {
        name: "Laptop",
        stock: 5
    },
    {
        name: "Phone",
        stock: 0
    },
    {
        name: "Mouse",
        stock: 10
    },
    {
        name: "Keyboard",
        stock: 0
    }
];

console.log(getOutOfStockProducts(products));
