var redux = require('redux')
var thunk = require('redux-thunk').default

var {PageReducer, ShoppingCartReducer, TotalCostReducer} = require('../reducers/reducers.js')

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    page: PageReducer,
    shoppingCart: ShoppingCartReducer,
    total: TotalCostReducer
  })
  initialState = {
    page: 'StartPage',
    shoppingCart: [],
    total: 0
  }
  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
  return store
}
