var superagent = require('superagent')

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

export var changeCartItemQuantity = (keyCode, template, quantity) => {
  return {
    type: 'CHANGE_CART_ITEM_QUANTITY',
    keyCode,
    template,
    quantity
  }
}

export var updateCustomerInfo = (attribute, value) => {
  return {
    type: 'UPDATE_CUSTOMER_INFO',
    attribute,
    value
  }
}

export var resetCustomerInfo = () => {
  return {
    type: 'RESET_CUSTOMER_INFO'
  }
}

export var selectTemplate = (template) => {
  return {
    type: 'SELECT_TEMPLATE',
    template
  }
}
