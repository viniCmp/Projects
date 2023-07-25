const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
let array = [];
for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock === 0) {
        array.push(stockProducts[index].quantityInStock)
    }
}
//getting elements using map and stringConstructor to make them an array of strings elements.
return array.map(String);

};
console.log(getOutOfStockProducts());
