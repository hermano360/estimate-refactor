var redux = require('redux')
var thunk = require('redux-thunk').default
var {
  PageReducer,
  CachedQuotesReducer,
  QuoteNumberReducer,
  InitialQuoteNumberReducer,
  AvailableQuoteNumbersReducer,
  DOMNodesReducer,
  GlobalConfigsReducer,
} = require('../reducers/reducers.js')

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    page: PageReducer,
    cachedQuotes: CachedQuotesReducer,
    quoteNumber: QuoteNumberReducer,
    InitialQuoteNumber: InitialQuoteNumberReducer,
    availableQuoteNumbers: AvailableQuoteNumbersReducer,
    shoppingCartDOMNodes: DOMNodesReducer,
    globalConfigs: GlobalConfigsReducer
  })
  initialState = {
    page: 'StartPage',
    cachedQuotes: {},
    quoteNumber: '',
    InitialQuoteNumber: '',
    availableQuoteNumbers: [],
    shoppingCartDOMNodes: {},
    globalConfigs:{
      tax: '9.25',
      laborCommission:'30',
      salesman: '',
      extraWorkCommision: '40'
    }
  }
  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
  return store
}
