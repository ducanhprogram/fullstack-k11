const products = [
    {
        id: 1,
        name: "Apple iPhone 12",
        price: 1000,
    },
    {
        id: 2,
        name: "Samsung Galaxy S21",
        price: 900,
    },
    {
        id: 3,
        name: "Xiaomi Mi 11",
        price: 800,
    },
    {
        id: 4,
        name: "Apple iPhone 11",
        price: 700,
    },
    {
        id: 5,
        name: "Samsung Galaxy S20",
        price: 600,
    },
    {
        id: 6,
        name: "Xiaomi Mi 10",
        price: 500,
    },
];

const getTopProducts = (products, top) => {
    let topProducts = [];
    products.forEach((product) => {
        topProducts.push(product);
        for (let i = 0; i < topProducts.length - 1; i++) {
            if (topProducts[i].price < topProducts[i + 1].price) {
                let temp = topProducts[i];
                topProducts[i] = topProducts[i + 1];
                topProducts[i + 1] = temp;
            }
        }

        if (topProducts.length > top) {
            topProducts.pop();
        }
    });
    return topProducts;
};
const result = getTopProducts(products, 3);
console.log(result);
