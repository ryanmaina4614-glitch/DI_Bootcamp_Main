// =====================================
// IMPORT PRODUCTS
// =====================================

const products = require('./products');

// =====================================
// FUNCTION: SEARCH PRODUCT BY NAME
// =====================================

function findProduct(productName) {
    const product = products.find(
        p => p.name.toLowerCase() === productName.toLowerCase()
    );

    if (product) {
        console.log("Product Found:");
        console.log(product);
    } else {
        console.log("Product not found.");
    }
}

// =====================================
// FUNCTION CALLS (TESTING)
// =====================================

findProduct("Laptop");
findProduct("Shoes");
findProduct("Phone");
findProduct("Tablet"); // Not in list