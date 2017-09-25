import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
import injectTapEventPlugin from 'react-tap-event-plugin'
const { Provider } = require('react-redux')
const actions = require('./actions/actions.js')
const store = require('./store/configureStore.js').configure()

injectTapEventPlugin()



ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
)
