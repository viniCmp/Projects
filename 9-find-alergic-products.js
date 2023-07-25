const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  const products = [];
  let result;
  for (let index = 0; index < stockProducts.length; index += 1) {
    const element = stockProducts[index];
    if (element.allergyOrIntolerance) {
      result = {
        description: element.description,
        formattedPrice: `R$ ${element.price}`,
        allergyOrIntoleranceMessage: `Pode conter: ${element.allergyOrIntolerance.join(' ')}`,
      }; products.push(result);
    } else {
      result = {
        description: element.description,
        formattedPrice: element.price,
      }; products.push(result);
    }
  }
  return products;
};
console.log(getProductsWithAllergyOrIntoleranceInfo());