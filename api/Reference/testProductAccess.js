import testDatabase from './testDatabase'

module.exports = {

  getModelNo : function(modelNo){
    let selectedProduct;
    testDatabase.products.forEach((product)=>{
      if(product.modelNo === modelNo){
        selectedProduct = product;
      }
    })
    return selectedProduct
  },
  allProducts : function(){
    return testDatabase.products
  },
  getModelNos: function(modelNos){
    let selectedProducts=[];
    testDatabase.products.forEach((product)=>{
      if(modelNos.indexOf(product.modelNo) > -1){
        selectedProducts.push(product)
      }
    })
    return selectedProducts
  },
  getAllNames: function(){
    let names = {}
    //{ "Apple": null}
    testDatabase.products.forEach((product)=>{
      names[product.name]= null;
    })
    return names
  },
  getProductWithName: function(name){
    let productCopy = {};
    testDatabase.products.forEach((product)=>{
      if(product.name === name){
        for(let key in product){
          if(key !== 'template'){
            productCopy[key] = product[key]
          }
        }
      }
    })

    return productCopy
  }
}
