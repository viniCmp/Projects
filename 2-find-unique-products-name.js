const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  let array = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (typeof(stockProducts[index].productName === true)) {
      array.push(stockProducts[index].productName)
    }
  }
  return array;
}
console.log(getUniqueProductsName());

