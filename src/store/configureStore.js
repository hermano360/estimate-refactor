var redux = require('redux')
var thunk = require('redux-thunk').default
var {PageReducer, CachedQuotesReducer, QuoteNumberReducer, InitialQuoteNumberReducer, AvailableQuoteNumbersReducer, DOMNodesReducer} = require('../reducers/reducers.js')

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    page: PageReducer,
    cachedQuotes: CachedQuotesReducer,
    quoteNumber: QuoteNumberReducer,
    InitialQuoteNumber: InitialQuoteNumberReducer,
    availableQuoteNumbers: AvailableQuoteNumbersReducer,
    shoppingCartDOMNodes: DOMNodesReducer
  })
  initialState = {
    page: 'StartPage',
    cachedQuotes: {},
    quoteNumber: '',
    InitialQuoteNumber: '',
    availableQuoteNumbers: [],
    shoppingCartDOMNodes: {}
  }
  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
  return store
}
