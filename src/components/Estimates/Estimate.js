import React, {Component} from 'react'
import {Button, Row, Col, Grid, Table, Panel, Modal} from 'react-bootstrap'
import ShoppingCartItem from './ShoppingCartItem'
import EstimateForms from './EstimateForms'
import Select from 'react-select'
import ToggleButton from 'react-toggle'

var actions = require('../../actions/actions.js')
var {connect} = require('react-redux')
const databaseSimulation = require('../../../api/quoteDatabase.js')
const axios = require('axios')

export class Estimate extends Component {
  constructor () {
    super()
    this.state = {
      estimateStatus: 'main',
      modal: false,
      animal: 'elephants',
      tax: 10,
      costAdjustment: 30,
      showTotal: true
    }
  }

  handleTemplateSelect (template) {
    let {dispatch, quoteNumber} = this.props
    // if the template selected isnt the default option
    if (template !== 'select') {
      dispatch(actions.selectTemplate(quoteNumber, template))
    }
  }

  duplicateQuote () {
    let {dispatch, quoteNumber, cachedQuotes} = this.props
    let nowDate = new Date()
    let monthRef = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    let dateString = `${nowDate.getDate()}-${monthRef[nowDate.getMonth()]}-${nowDate.getFullYear().toString().slice(-2)}`
    let databaseMax = databaseSimulation.getNewQuoteNumber();
    let globalMax = this.retrieveHighestCachedQuoteNumber(databaseMax)
    let newGlobalMax = globalMax + 1
    dispatch(actions.duplicateQuote(newGlobalMax, dateString, cachedQuotes[quoteNumber]))
    dispatch(actions.setAvailableQuoteNumbers([newGlobalMax]))
    dispatch(actions.clearShoppingCartNode())
    dispatch(actions.setQuote(newGlobalMax))

  }
  generateNewQuote () {
    let {dispatch} = this.props
    let databaseMax = databaseSimulation.getNewQuoteNumber();
    let globalMax = this.retrieveHighestCachedQuoteNumber(databaseMax)
    let newGlobalMax = globalMax + 1
    let nowDate = new Date()
    let monthRef = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    let dateString = `${nowDate.getDate()}-${monthRef[nowDate.getMonth()]}-${nowDate.getFullYear().toString().slice(-2)}`
    dispatch(actions.addEmptyQuote(newGlobalMax, dateString))
    dispatch(actions.setAvailableQuoteNumbers([newGlobalMax]))
    dispatch(actions.clearShoppingCartNode())
    dispatch(actions.setQuote(newGlobalMax))

  }

  retrieveHighestCachedQuoteNumber( databaseMax){
    let {cachedQuotes} = this.props
    let globalMax = databaseMax
    for (let quotes in cachedQuotes) {
      if(globalMax < Number(quotes)){
        globalMax = Number(quotes)
      }
    }
    return globalMax
  }



  findPreviousQuoteNumber (currentQuote, cachedQuoteNumbers) {
    let previousQuoteNumber = 0

     cachedQuoteNumbers.forEach((quoteNumber) => {

    if( quoteNumber < currentQuote && quoteNumber > previousQuoteNumber) {
       previousQuoteNumber = quoteNumber
       console.log(previousQuoteNumber)
     }
   })
   if(previousQuoteNumber === 0) {
     previousQuoteNumber = currentQuote
   }
   return previousQuoteNumber

  }

  findNextQuoteNumber (currentQuote, cachedQuoteNumbers) {
    let nextQuoteNumbers = []

    cachedQuoteNumbers.forEach((quoteNumber) =>{
      if(quoteNumber > currentQuote) {
        nextQuoteNumbers.push(quoteNumber)
      }
    })
    if(nextQuoteNumbers.length === 0){
      return currentQuote
    } else {
      return Math.min(...nextQuoteNumbers)
    }

  }
  generateEstimate (total) {
    let {cachedQuotes, quoteNumber} = this.props
    axios({
      method: 'post',
      url: '/generateDocument',
      data: {
        quoteInformation: cachedQuotes[quoteNumber],
        total
      }

    }).then((response) => {
      this.setState({
        animal: 'giraffes'
      })
    })
  .catch(function (error) {
    console.log(error)
  })
  }

  calculateTotal(shoppingCart){
    const {tax, costAdjustment} = this.state
    let total = 0
    shoppingCart.forEach((item) => {
      total += (parseFloat(item.Labor) * (1 + tax/100) * (1 + costAdjustment/100) + parseFloat(item.Material)) * parseFloat(item.quantity)
    })
    return parseFloat(total).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(\.\d{2})?$)/g, '$1,')
  }

  render () {
    const {dispatch, cachedQuotes, quoteNumber, InitialQuoteNumber, availableQuoteNumbers} = this.props

    var codeOptions = [
      { value: 'faucet1', label: 'faucet1' },
      { value: 'faucet2', label: 'faucet2' },
      { value: 'faucet3', label: 'faucet3' },
      { value: 'faucet4', label: 'faucet4' },
      { value: 'light1', label: 'light1' },
      { value: 'light2', label: 'light2' },
      { value: 'light3', label: 'light3' },
      { value: 'light4', label: 'light4' },
      { value: 'fan1', label: 'fan1' },
      { value: 'fan2', label: 'fan2' },
      { value: 'fan3', label: 'fan3' },
      { value: 'fan4', label: 'fan4' }
    ]
    var templateOptions = [
    { value: 'Demolition', label: 'Demolition' },
    { value: 'Foundation/Footings', label: 'Foundation/Footings' },
    { value: 'Bathroom', label: 'Bathroom' }
  ];

    let shoppingCart = cachedQuotes[quoteNumber].shoppingCart
    let total = this.calculateTotal(shoppingCart)
    let downloadLink = (totalDough) => {
      if (this.state.animal === 'giraffes') {
        return (
          <a href='/downloadWordDocument' onClick={() => {
            this.setState({
              animal: 'elephants'
            })
          }}><Button style={bottomButtonStyle}>Download</Button></a>
        )
      } else {
        return (
          <Button onClick={() => {
            this.generateEstimate(totalDough)
          }} style={bottomButtonStyle}>Estimate</Button>
        )
      }
    }
    let shoppingCartFunction = () => {
      return shoppingCart.map((shoppingCartItem, itemNumber) => {
        return (
          <ShoppingCartItem key={itemNumber} number={itemNumber+1} {...shoppingCartItem} />
        )
      })
    }

    let bottomButtonStyle = {
      color: 'black',
      fontWeight: '500',
      fontSize: '10px',
      width: '17vw',
      height:'auto',
      marginLeft:'1.5vw',
      marginRight:'1.5vw',
      backgroundColor:'#B4E41C',
      borderRadius: '5px',
      textAlign:'center',
      overflowY: 'visible',
      whiteSpace: 'normal',
      wordWrap: 'break-word',
      padding: '1px'
    }
    let totalButtonStyle = {
      position: 'fixed',
      bottom: '15px',
      right: '1.5vw',
      color: 'black',
      fontWeight: '500',
      fontSize: '10px',
      minWidth: '17vw',
      height:'auto',
      backgroundColor:'#F6CE2E',
      borderRadius: '5px',
      textAlign:'center',
      overflowY: 'visible',
      whiteSpace: 'normal',
      wordWrap: 'break-word',
      padding: '1px',
      zIndex: '1',
      visibility: this.state.showTotal ? 'visible': 'hidden'
    }
    let backButtonStyle = {
      position: 'fixed',
      bottom: '15px',
      left: '1.5vw',
      color: 'black',
      fontWeight: '500',
      fontSize: '10px',
      minWidth: '17vw',
      height:'auto',
      backgroundColor:'#F6CE2E',
      borderRadius: '5px',
      textAlign:'center',
      overflowY: 'visible',
      whiteSpace: 'normal',
      wordWrap: 'break-word',
      padding: '1px',
      zIndex: '1'
    }
    let logoStyles = {
      width: '50%',
      height: 'auto',
      borderRadius: '5px',
      padding: '5px'
    }
    let arrowStyles= {
      height:'35px',
      width:'auto'
    }

    return (
      <div>
        <Button style={totalButtonStyle}  onClick={() => {
          this.setState({modal: true})
        }}>
          <div>
            Total
           </div>
          <div>
            ${total}
          </div>
        </Button>
        <Button style={backButtonStyle} onClick={() => { dispatch(actions.changePage('StartPage')) }} >
          Back
        </Button>
      <Grid fluid style={{height:'95vh', top:'0'}}>
        <Row>
          <Col xs={12} style={{textAlign: 'right', marginTop:'15px', position: 'absolute', zIndex: '1'}}>
            <img src='/left-arrow.png' style={arrowStyles} onClick={() => {
              let nextQuoteNumber = this.findNextQuoteNumber(quoteNumber, availableQuoteNumbers)
              if (nextQuoteNumber in cachedQuotes) {
                dispatch(actions.clearShoppingCartNode())
                dispatch(actions.setQuote(nextQuoteNumber))

              } else {
                let nextQuote = databaseSimulation.retrieveQuote(nextQuoteNumber)
                dispatch(actions.addQuoteToCache(nextQuote))
                dispatch(actions.clearShoppingCartNode())
                dispatch(actions.setQuote(nextQuoteNumber))

              }
            }}/>
            <span style={{fontWeight:'bold', fontSize:'20px', margin:'10px', color:'black'}}>{`# ${this.props.quoteNumber}`}</span>
            <img src='/right-arrow.png' style={arrowStyles}
            onClick={() => {
              let previousQuoteNumber = this.findPreviousQuoteNumber(quoteNumber, availableQuoteNumbers)
              if (previousQuoteNumber in cachedQuotes) {
                dispatch(actions.clearShoppingCartNode())
                dispatch(actions.setQuote(previousQuoteNumber))

              } else {
                let previousQuote = databaseSimulation.retrieveQuote(previousQuoteNumber)
                dispatch(actions.addQuoteToCache(previousQuote))
                dispatch(actions.clearShoppingCartNode())
                dispatch(actions.setQuote(previousQuoteNumber))
                
              }
            }}/>
            <div>
              <ToggleButton
                checked={ this.state.showTotal}
                icons={{
                  checked: null,
                  unchecked: null,
                }}
                onChange={() => {
                  this.setState({
                    showTotal: !this.state.showTotal,
                  })
                }} />
            </div>
            <span style={{paddingRight:'15px'}}></span>
          </Col>
        </Row>
        <Row>
          <Col xs={12} style={{textAlign: 'center', marginTop:'50px'}}>
            <img src='/ezestimator_logo.png' style={logoStyles} />
          </Col>
        </Row>
        <Row>
          <EstimateForms />
          <div style={{width:'100vw', left:'0px'}}>
              <Table bordered condensed>
                <thead>
                  <tr>
                    <th colSpan='2' style={{textAlign: 'center'}}>
                      Estimators Worksheet
                    </th>
                  </tr>
                  <tr>
                    <th style={{backgroundColor:"black", color:'white', width:'50vw'}}>
                      <Select
                        style={{backgroundColor:"black", color:'white', borderColor:'black'}}
                        options={templateOptions}
                        onChange={(e) => { this.handleTemplateSelect(e.value) }}
                        placeholder='Choose Template'
                        noResultsText='N/A'
                        clearable={false}
                        className='harold'
                      />
                    </th>
                    <th style={{textAlign:'center', verticalAlign:'middle'}}>
                      <Select
                        options={codeOptions}
                        onChange={(e) => { dispatch(actions.addShoppingCartItem(e.value, quoteNumber)) }}
                        placeholder='Choose Code'
                        autoBlur={true}
                        noResultsText='N/A'
                      />
                    </th>
                  </tr>
                </thead>
              </Table>
                <div style={{maxHeight: '40vh', overflow: 'scroll'}}>
                <Table bordered condensed>
                  <tbody style={{fontSize:'10px'}}>
                    <tr>
                      <td style={{fontWeight: "bold", padding: "0"}}>#</td>
                      <td style={{fontWeight: "bold", padding: "0"}}>Code</td>
                      <td style={{fontWeight: "bold", padding: "0"}}>Amt</td>
                      <td style={{fontWeight: "bold", padding: "0"}}>Units</td>
                      <td style={{fontWeight: "bold", padding: "0"}}>Description</td>
                      <td style={{fontWeight: "bold", padding: "0"}}>Mtrl</td>
                      <td style={{fontWeight: "bold", padding: "0"}}>Lbr</td>
                      <td style={{fontWeight: "bold", padding: "0"}}></td>
                    </tr>
                    {shoppingCartFunction()}
                  </tbody>
                </Table>
                </div>
                <Table bordered condensed>
                  <tbody>
                    <tr>
                      <td>
                      </td>
                    </tr>
                  </tbody>
                </Table>
          </div>
        </Row>
        <Row>
          <div style={{textAlign: 'left', marginBottom:'47px', width:'100vw', left:'0'}}>
            {downloadLink(total)}
            <Button onClick={() => { this.duplicateQuote() }} style={bottomButtonStyle}>Duplicate</Button>
            <Button onClick={() => { this.generateNewQuote() }} style={bottomButtonStyle}>New Quote</Button>
            <Button onClick={() => { console.log('Work Order') }} style={bottomButtonStyle}>Work Order</Button>
            <Button onClick={() => { console.log('Shopping List') }} style={bottomButtonStyle}>Shopping List</Button>
            <Button onClick={() => { console.log('Convert Code') }} style={bottomButtonStyle}>Convert Code</Button>
            <Button onClick={() => { console.log('Email Bid') }} style={bottomButtonStyle}>Email Bid</Button>
            <Button onClick={() => { console.log('Email Vendor') }} style={bottomButtonStyle}>Email Vendor</Button>
            <Button onClick={() => { console.log('Credit Card') }} style={bottomButtonStyle}>Credit Card</Button>
            <Modal show={this.state.modal} onHide={() => { this.setState({modal: false}) }}>
              <Modal.Header closeButton>
                <Modal.Title style={{textAlign: 'center'}} >Cost Preview</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div style={{height: '40%', overflow: 'scroll'}}>
                  <Table bordered condensed>
                    <thead>
                      <tr>
                        <th />
                        <th>Material</th>
                        <th>Labor</th>
                        <th>Days</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Subtotal</td>
                        <td>$6,541.01</td>
                        <td>$8,113.80</td>
                        <td>38.72496</td>
                      </tr>
                      <tr>
                        <td />
                        <td>$327.05</td>
                        <td>$8,925.18</td>
                        <td />
                      </tr>
                      <tr>
                        <td />
                        <td>$6,868.06</td>
                        <td>$17,038.98</td>
                        <td />
                      </tr>
                      <tr>
                        <td>Tax</td>
                        <td>$566.62</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>Total</td>
                        <td>$7,434.68</td>
                        <td>$17,038.98</td>
                        <td />
                      </tr>
                      <tr>
                        <td>Grand Total</td>
                        <td>$24,473.66</td>
                        <td />
                        <td />
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={() => { this.setState({modal: false}) }}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </Row>
      </Grid>
      </div>
    )
  }
}

    export default connect(
      (state) => {
        return {
          cachedQuotes: state.cachedQuotes,
          quoteNumber: state.quoteNumber,
          InitialQuoteNumber: state.InitialQuoteNumber,
          availableQuoteNumbers: state.availableQuoteNumbers
        }
      }
    )(Estimate)
