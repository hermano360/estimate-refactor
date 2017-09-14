import React, {Component} from 'react'
import {Button, Row, Col, Grid, Table, Glyphicon, Panel, Modal} from 'react-bootstrap'
import ShoppingCartItem from './ShoppingCartItem'
import EstimateForms from './EstimateForms'

var actions = require('../../actions/actions.js')
var {connect} = require('react-redux')
const databaseSimulation = require('../../../api/quoteDatabase.js')
const axios = require('axios')

class Estimate extends Component {
  constructor () {
    super()
    this.state = {
      estimateStatus: 'main',
      modal: false,
      animal: 'elephants',
      tax: 10,
      costAdjustment: 30

    }
  }

  findPreviousQuoteNumber (currentQuote, listOfOtherQuoteNumbers) {
    for (let i = listOfOtherQuoteNumbers.length - 1; i >= 0; i--) {
      if (listOfOtherQuoteNumbers[i] < currentQuote) {
        return listOfOtherQuoteNumbers[i]
      }
    }
    console.log(EstimateForms.cake);
    return currentQuote
  }
  findNextQuoteNumber (currentQuote, listOfOtherQuoteNumbers, InitialQuoteNumber) {
    let allAvailableQuoteNumbers = [...listOfOtherQuoteNumbers, InitialQuoteNumber]

    for (let i = 0; i < allAvailableQuoteNumbers.length; i++) {
      if (allAvailableQuoteNumbers[i] > currentQuote) {
        return allAvailableQuoteNumbers[i]
      }
    }
    return currentQuote
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

  render () {
    const {dispatch, cachedQuotes, quoteNumber, InitialQuoteNumber, availableQuoteNumbers} = this.props
    const {tax, costAdjustment} = this.state
    let shoppingCart = cachedQuotes[quoteNumber].shoppingCart
    let total = 0
    shoppingCart.forEach((item) => {
      total += (item.Labor + item.Material) * item.quantity
    })
    total *= (1 + tax/100) * (1 + costAdjustment/100)
    total = parseFloat(total).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(\.\d{2})?$)/g, '$1,')

    let downloadLink = (totalDough) => {
      if (this.state.animal === 'giraffes') {
        return (
          <a href='/downloadWordDocument' onClick={() => {
            this.setState({
              animal: 'elephants'
            })
          }}><Button style={bottomButtonStyle}>Click To Download</Button></a>
        )
      } else {
        return (
          <Button onClick={() => {
            this.generateEstimate(totalDough)
          }} style={bottomButtonStyle}>Generate Estimate</Button>
        )
      }
    }
    let shoppingCartFunction = () => {
      return shoppingCart.map((shoppingCartItem) => {
        return (
          <ShoppingCartItem key={shoppingCartItem.keyCode + shoppingCartItem.template} {...shoppingCartItem} />
        )
      })
    }

    let bottomButtonStyle = {
      marginLeft: '5px',
      marginRight: '5px',
      verticalAlign: 'middle'
    }
    let logoStyles = {
      width: '100%',
      height: 'auto',
      'marginTop': '50px',
      backgroundColor: 'white',
      borderRadius: '5px',
      padding: '5px'
    }

    // possible form item generator for later. seems to be too many one-off cases

    return (
      <Grid fluid>
        <Row>
          <Col sm={12} style={{textAlign: 'center', margin: '10px auto 20px auto'}}>
            <img src='/ezestimator_logo.png' style={logoStyles} />
          </Col>
        </Row>
        <Row>
          <EstimateForms />
          <Col sm={12}>
            <div style={{height: '40vh', overflow: 'scroll'}}>
              <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Amt</th>
                    <th>Unit</th>
                    <th>Description</th>
                    <th>Mtrl</th>
                    <th>Labor</th>
                    <th><Glyphicon glyph='remove' /></th>
                  </tr>
                </thead>
                <tbody>
                  {shoppingCartFunction()}
                </tbody>
              </Table>
            </div>
            <Table striped bordered condensed hover>
              <tbody>
                <tr>
                  <td colSpan='7' onClick={() => { console.log('add custom item') }} style={{textAlign: 'center'}}>Add Item</td>
                </tr>
              </tbody>

            </Table>
          </Col>
        </Row>
        <Row>
          <Col sm={8}>
            <Row>
              <Col sm={12} style={{textAlign: 'center'}}>
                <Button onClick={() => { dispatch(actions.changePage('StartPage')) }} style={bottomButtonStyle}>Back</Button>
                {downloadLink(total)}
                {/* <Button onClick={() => { if (this.props.shoppingCart.length > 0) { this.setState({estimateStatus: 'productPreview'}) } }} style={bottomButtonStyle}>Products</Button>
                      <Button onClick={() => { console.log('Shopping List') }} style={bottomButtonStyle}>Shopping List</Button> */}
                <Button onClick={() => { this.setState({modal: true}) }} style={bottomButtonStyle}>Cost Preview</Button>
                <Modal show={this.state.modal} onHide={() => { this.setState({modal: false}) }}>
                  <Modal.Header closeButton>
                    <Modal.Title style={{textAlign: 'center'}} >Cost Preview</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div style={{height: '40%', overflow: 'scroll'}}>
                      <Table striped bordered condensed hover>
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
              </Col>
              <Col sm={12} style={{textAlign: 'center', marginTop: '5px'}}>
                <Button onClick={() => { dispatch(actions.setQuote(InitialQuoteNumber)) }}>Current</Button>
                <Button onClick={() => {
                  let nextQuoteNumber = this.findNextQuoteNumber(quoteNumber, availableQuoteNumbers, InitialQuoteNumber)
                  if (nextQuoteNumber in cachedQuotes) {
                    dispatch(actions.setQuote(nextQuoteNumber))
                  } else {
                    let nextQuote = databaseSimulation.retrieveQuote(nextQuoteNumber)
                    dispatch(actions.addQuoteToCache(nextQuote))
                    dispatch(actions.setQuote(nextQuoteNumber))
                  }
                }}>{`<`}</Button>
                <Button> Quote {quoteNumber}</Button>
                <Button onClick={() => {
                  let previousQuoteNumber = this.findPreviousQuoteNumber(quoteNumber, availableQuoteNumbers)
                  if (previousQuoteNumber in cachedQuotes) {
                    dispatch(actions.setQuote(previousQuoteNumber))
                  } else {
                    let previousQuote = databaseSimulation.retrieveQuote(previousQuoteNumber)
                    dispatch(actions.addQuoteToCache(previousQuote))
                    dispatch(actions.setQuote(previousQuoteNumber))
                  }
                }}>></Button>
                <Button onClick={() => {
                  let firstQuoteNumber = availableQuoteNumbers[0]
                  if (firstQuoteNumber in cachedQuotes) {
                    dispatch(actions.setQuote(firstQuoteNumber))
                  } else {
                    let firstQuote = databaseSimulation.retrieveQuote(firstQuoteNumber)
                    dispatch(actions.addQuoteToCache(firstQuote))
                    dispatch(actions.setQuote(firstQuoteNumber))
                  }
                }}>{'>|'}</Button>
              </Col>
            </Row>
          </Col>
          <Col sm={4}>
            <Panel>
              <h5>Grand Total with Tax : ${total}</h5>
            </Panel>
          </Col>
        </Row>
      </Grid>
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
