const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  let array = [];
  let nameOfProduct = '';
  for (let index = 0; index < stockProducts.length; index += 1) {
      if (stockProducts[index].quantityInStock > 0 && stockProducts[index].quantityInStock <= 10) {
        nameOfProduct = stockProducts[index].productName
        array.push(`${nameOfProduct}: ${stockProducts[index].quantityInStock} unidades`);
      }
  }
  return array;
}
