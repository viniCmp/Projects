
const stockProducts = require('./data.json');
const getUniqueProductsAmount = () => {
    let itensAmount = 0;
    itensAmount = stockProducts.length
    return itensAmount
};
console.log(getUniqueProductsAmount());



