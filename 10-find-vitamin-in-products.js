const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  let vitaminLookUp = [];
  for(let index = 0; index < stockProducts.length; index += 1) {
    let vitamin = stockProducts[index].nutritionalInfo.vitamins;
    if(vitamin) { 
      vitaminLookUp.push({
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`,
        vitaminsInformation: Object.values(stockProducts[index].nutritionalInfo.vitamins),
      });
    }
  } return vitaminLookUp;
}; console.log(getProductsRichInVitamin())