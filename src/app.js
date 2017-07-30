import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
import {BrowserRouter as Router,Link,Route } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();


class App extends Component {
  render(){
    return (
      <Router>
      <div>
      	<Route exact={true} path='/' component={Main}/>
      	<Route path='/g/' component={Test}/>
      </div>
      </Router>
    )
  }
}

const Test = ()=>(
	<div>
	{`Herrro`}
	</div>
)

ReactDOM.render(<App />, document.getElementById('app'))
