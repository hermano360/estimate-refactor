import React, {Component} from 'react'
import StartPage from './StartPage.js'
import NewEstimate from './Estimates/NewEstimate'
// import NewEstimateRev1 from './NewEstimateRev1'
// import EstimatePage from './EstimatePage'


class Main extends Component {

   constructor(){
    super()
    this.state = {
      page:'StartPage'
    }
    // this.handleNewEstimate=this.handleNewEstimate.bind(this);
    // this.handleGenerateEstimate=this.handleGenerateEstimate.bind(this);
    // this.handleChangeSalesman= this.handleChangeSalesman.bind(this);
  }

  render(){
    const {page} = this.state;
    switch(page) {
      case 'StartPage':
        return (
        <StartPage /> //<StartPage newEstimate={this.handleNewEstimate}/>
          )
        break;
      case 'NewEstimate':
        return (
          <NewEstimate/>
        )
        break;
      case 'EstimatePage':
        return (
          <EstimatePage {...this.state} description={this.state.description} salesman= {this.state.salesman} scopeText = {this.state.scopeText} shoppingCartFinal={this.state.shoppingCartFinal} itemQuantityChange={this.handleItemQuantityChange} itemTotals = {this.state.itemTotals}/>
        )
        break;
      default:

    }
  }

}

export default Main
