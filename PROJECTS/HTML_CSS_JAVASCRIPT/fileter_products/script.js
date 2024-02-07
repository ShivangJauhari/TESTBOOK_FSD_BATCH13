let products = [
    { name: 'Product 1', price: 100, category: 'Electronics', rating: 4 },
    { name: 'Product 2', price: 200, category: 'Electronics', rating: 5 },
    { name: 'Product 3', price: 150, category: 'Books', rating: 5 },
    { name: 'Product 4', price: 80, category: 'Books', rating: 4 },
];

let filter = { category: 'Books', rating: 5 };

let filteredProducts = filterProducts(products, filter);

let productList = document.getElementById('product-list');

filteredProducts.forEach(product => {
    let productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <h2>${product.name}</h2>
        <p>Price: $${product.price}</p>
        <p>Category: ${product.category}</p>
        <p>Rating: ${product.rating}</p>
    `;
    productList.appendChild(productDiv);
});

function filterProducts(products, filter) {
    let filteredProducts = products.filter(product => {
        for (let key in filter) {
            if (product[key] !== filter[key]) {
                return false;
            }
        }
        return true;
    });
    return filteredProducts;
}