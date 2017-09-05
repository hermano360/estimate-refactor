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