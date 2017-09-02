import React, {Component} from 'react'
import StartPage from './StartPage.js'
import Products from './Products/Products'
import PhoneList from './PhoneList/PhoneList'
import Estimate from './Estimates/Estimate'
var {connect} = require('react-redux')

class Main extends Component {

  render () {
    const {page} = this.props
    switch (page) {
      case 'StartPage':
        return (
          <StartPage />
          )
      case 'Products':
        return (
          <Products />
        )
      case 'PhoneList':
        return (
          <PhoneList />
        )
      case 'Estimate':
        return (
          <Estimate />
        )
      default:
        return (
          <StartPage />
        )
    }
  }
}

export default connect(
  (state) => {
    return {
      page: state.page
    }
  }
)(Main)
