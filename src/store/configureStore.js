var redux = require('redux')
var thunk = require('redux-thunk').default
var {PageReducer, ShoppingCartReducer, CustomerReducer} = require('../reducers/reducers.js')

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    page: PageReducer,
    shoppingCart: ShoppingCartReducer,
    customerInformation : CustomerReducer
  })
  initialState = {
    page: 'StartPage',
    shoppingCart: [],
    customerInformation : {
      salesman: '',
      customerFirstName: '',
      customerLastName: '',
      email: '',
      // quoteNumber: 0,
      projectDescription: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      specification: '',
      phone: '',
      fax: '',
      // date: todaysDate()
    }
  }
  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
  return store
}
