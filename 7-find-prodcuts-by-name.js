const stockProducts = require('./data.json');
//ANALISAR ESSE CODIGO E FAZER OUTROS EX COM PARAMETRO & ARG
const searchProductByName = (prodctName) => {
  let prodct = {}
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].productName === prodctName) {
      prodct.description = stockProducts[index].description;
      prodct.formattedPrice = `R$ ${stockProducts[index].price}`;
      return prodct
    }
  }
  return null;
};
console.log(searchProductByName('Feijão'));
