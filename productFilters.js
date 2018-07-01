var products = [
    { name: "cucumber", type: "fruit", quantity: 12, price: 10 },
    { name: "banana", type: "fruit", quantity: 11, price: 12 },
    { name: "banana", type: "fruit", quantity: 33, price: 12 },
    { name: "tomato", type: "vegie", quantity: 30, price: 12 },
]

//let filteredProducts;

products.filter((product) => product.type === "fruit"
    && product.quantity > 11 && product.price <= 12)