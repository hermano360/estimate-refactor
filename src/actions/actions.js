var superagent = require('superagent');


export var changePage = (page) => {
  return {
    type: 'CHANGE_PAGE',
    page
  }
}

export var updateEstimate = (estimate) => {
  return {
    type: 'UPDATE_ESTIMATE',
    estimate
  }
}

export var updateShoppingCart = (shoppingCart) => {
  return {
    type: 'UPDATE_SHOPPING_CART',
    shoppingCart
  }
}

export var deleteShoppingCartItem = (keyCode, template) => {
  return {
    type: 'DELETE_SHOPPING_CART_ITEM',
    keyCode,
    template
  }
}

export var recalculateTotal = (shoppingCart) => {
  return {
    type: 'RECALCULATE_TOTAL',
    shoppingCart
  }
}
