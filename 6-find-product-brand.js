const stockProducts = require('./data.json');

const searchProductsByBrand = (prodctBrand) => {
    let array = [];
    let prodct = {};
    for (let index = 0; index < stockProducts.length; index += 1) {
        if (stockProducts[index].brand === prodctBrand) {
            prodct = {
                description: stockProducts[index].description,
                formattedPrice: `R$ ${stockProducts[index].price}`,
            }
            array.push(prodct)
        }
    }
    return array;
};
console.log(searchProductsByBrand('Hortifruti'));




