import React, {Component} from 'react'
import StartPage from './StartPage.js'
import NewEstimate from './Estimates/NewEstimate'
import Products from './Products/Products'
import PhoneList from './PhoneList/PhoneList'
import Estimate from './Estimates/Estimate'


class Main extends Component {

   constructor(){
    super()
    this.state = {
      //page:'StartPage'
      page:'Estimate'
    }
    this.handleProductsClick=this.handleProductsClick.bind(this);
    this.handlePhoneListClick=this.handlePhoneListClick.bind(this);
    this.handleEstimateClick=this.handleEstimateClick.bind(this);
    this.handleBackToMain=this.handleBackToMain.bind(this);
    // this.handleGenerateEstimate=this.handleGenerateEstimate.bind(this);
    // this.handleChangeSalesman= this.handleChangeSalesman.bind(this);
  }


  handleProductsClick(){
    this.setState({
      page:'Products'
    })
  }

  handleEstimateClick(){
    this.setState({
      page:'Estimate'
    })
  }
  handlePhoneListClick(){
    this.setState({
      page:'PhoneList'
    })
  }
  handleBackToMain(){
    this.setState({
      page:'StartPage'
    })
  }

  render(){
    const {page} = this.state;
    switch(page) {
      case 'StartPage':
        return (
        <StartPage onProductsClick={this.handleProductsClick} onPhoneListClick={this.handlePhoneListClick} onEstimateClick={this.handleEstimateClick}/>
          )
        break;
      case 'Products':
        return (
          <Products backToMainPage={this.handleBackToMain}/>
        )
        break;
      case 'PhoneList':
        return (
          <PhoneList backToMainPage={this.handleBackToMain}/>
        )
        break;
      case 'Estimate':
        return (
          <Estimate backToMainPage={this.handleBackToMain}/>
        )
        break;
      default:

    }
  }

}

export default Main
