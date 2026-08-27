
function searchProducts(products, searchTerm) {
   let  searchProduct = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            searchProduct.push(product);
        }
    }
    return searchProduct;
}
const products = [
  {
    name: "Laptop",
    price: 80000
  },
  {
    name: "Phone",
    price: 30000
  },
  {
    name: "Mouse",
    price: 1000
  },
  {
    name: "Keyboard",
    price: 2500
  }
];

console.log(searchProducts(products,'ke'));
