const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  let array = []
  let products = {}
    for (let index = 0; index < stockProducts.length; index += 1) {
      if(stockProducts[index].onSale === true) {
        //COLOCANDO DIRETAMENTE O OBJ DENTRO DA ARRAY BY PUSHING()
        array.push({
          description: stockProducts[index].description,   // MESMO NOME DE CHAVE MAS USANDO O INDEX DO QUE EU QUERO
          formattedPrice: `R$ ${stockProducts[index].price}`,
          onSale: stockProducts[index].onSale
      })
      }
    }
  return array
}
console.log(getProductsOnSale());