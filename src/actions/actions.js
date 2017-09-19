var databaseSimulation = require('../../api/quoteDatabase')

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

export var addShoppingCartItem = (shoppingCartItem, quoteNumber) => {
  return {
    type: 'ADD_SHOPPING_CART_ITEM',
    shoppingCartItem,
    quoteNumber
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

export const retrieveNewQuote = () => {
  return (dispatch, getState) => {
    let nextQuoteNumber = databaseSimulation.getNewQuoteNumber()
    let nowDate = new Date()
    let monthRef = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    let dateString = `${nowDate.getDate()}-${monthRef[nowDate.getMonth()]}-${nowDate.getFullYear().toString().slice(-2)}`
    dispatch(setInitialQuote(nextQuoteNumber))
    dispatch(setQuote(nextQuoteNumber))
    dispatch(addEmptyQuote(nextQuoteNumber, dateString))
  }
}

export const setQuote = (quoteNumber) => {
  return {
    type: 'SET_QUOTE',
    quoteNumber
  }
}

export const setInitialQuote = (quoteNumber) => {
  return {
    type: 'SET_INITIAL_QUOTE',
    quoteNumber
  }
}

export const addEmptyQuote = (quoteNumber, date) => {
  return {
    type: 'ADD_EMPTY_QUOTE',
    quoteNumber,
    date
  }
}

export const addQuoteToCache = (quote) => {
  return {
    type: 'ADD_QUOTE_TO_CACHE',
    quote
  }
}

export var updateQuoteInfo = (quoteNumber, attribute, value) => {
  return {
    type: 'UPDATE_QUOTE_INFO',
    attribute,
    value,
    quoteNumber
  }
}

export var selectTemplate = (quoteNumber, template) => {
  return {
    type: 'SELECT_TEMPLATE',
    template,
    quoteNumber
  }
}

export var changeCartItemQuantity = (quoteNumber, keyCode, template, quantity) => {
  return {
    type: 'CHANGE_CART_ITEM_QUANTITY',
    keyCode,
    template,
    quantity,
    quoteNumber
  }
}

export var changeCartItemCosts = (quoteNumber, keyCode, template, newPrice, parameter) => {
  let type
  if(parameter === 'labor') {
    type = 'CHANGE_CART_ITEM_LABOR'
  } else if (parameter === 'material') {
    type= 'CHANGE_CART_ITEM_MATERIAL'
  }
  return {
    type,
    keyCode,
    template,
    newPrice,
    quoteNumber
  }
}

export var changeCartItemDescription = (quoteNumber, keyCode, template, description) => {
  return {
    type: 'CHANGE_CART_ITEM_DESCRIPTION',
    keyCode,
    template,
    description,
    quoteNumber
  }
}

export var changeCartItemMaterial = (quoteNumber, keyCode, template, Material) => {
  return {
    type: 'CHANGE_CART_ITEM_MATERIAL',
    keyCode,
    template,
    Material,
    quoteNumber
  }
}

export var changeCartItemLabor = (quoteNumber, keyCode, template, Labor) => {
  return {
    type: 'CHANGE_CART_ITEM_LABOR',
    keyCode,
    template,
    Labor,
    quoteNumber
  }
}

export var deleteShoppingCartItem = (quoteNumber, keyCode, template) => {
  return {
    type: 'DELETE_SHOPPING_CART_ITEM',
    keyCode,
    template,
    quoteNumber
  }
}

export const retrievePreviousQuote = (currentQuoteNumber) => {
  return (dispatch, getState) => {
    let previousQuoteNumber = databaseSimulation.getPreviousQuoteNumber(currentQuoteNumber)
    dispatch(setQuote(previousQuoteNumber))
  }
}

export const retrieveAvailableQuoteNumbers = () => {
  return (dispatch, getState) => {
    let availableQuoteNumbers = databaseSimulation.retrieveAvailableQuoteNumbers()
    dispatch(setAvailableQuoteNumbers(availableQuoteNumbers))
  }
}

export const setAvailableQuoteNumbers = (availableQuoteNumbers) => {
  return {
    type: 'SET_AVAILABLE_QUOTE_NUMBERS',
    availableQuoteNumbers
  }
}

export const setShoppingCartNode = (key, node) => {
  return {
    type: 'SET_SHOPPING_CART_NODE',
    key,
    node
  }
}
