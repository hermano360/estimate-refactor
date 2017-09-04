var axios = require('axios')
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

export var deleteShoppingCartItem = (keyCode, template) => {
  return {
    type: 'DELETE_SHOPPING_CART_ITEM',
    keyCode,
    template
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
    dispatch(setInitialQuote(nextQuoteNumber))
    dispatch(setQuote(nextQuoteNumber))
    dispatch(addEmptyQuote(nextQuoteNumber, new Date()))
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

export const retrievePreviousQuote = (currentQuoteNumber) => {
  return (dispatch, getState) => {
    let previousQuoteNumber = databaseSimulation.getPreviousQuoteNumber(currentQuoteNumber)
    dispatch(setQuote(previousQuoteNumber))
  }
}


export const retrieveAvailableQuoteNumbers = () => {
  return (dispatch, getState) => {
    let availableQuoteNumbers = databaseSimulation.retrieveAvailableQuoteNumbers()
    console.log(availableQuoteNumbers)
    dispatch(setAvailableQuoteNumbers(availableQuoteNumbers))
  }
}

export const setAvailableQuoteNumbers = (availableQuoteNumbers) => {
  return {
    type: 'SET_AVAILABLE_QUOTE_NUMBERS',
    availableQuoteNumbers
  }
}
