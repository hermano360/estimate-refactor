import React, {Component} from 'react'
import {Button, Row, Col, Grid, FormControl, ControlLabel, FormGroup, Clearfix, Table, Glyphicon, Panel, Modal} from 'react-bootstrap'
import ShoppingCartItem from './ShoppingCartItem'
import EstimatePDF from './EstimatePDF'
import ProductPreview from './ProductPreview'
import EstimateForms from './EstimateForms'

var actions = require('../../actions/actions.js')
var {connect} = require('react-redux')
const databaseSimulation = require('../../../api/quoteDatabase.js')

class Estimate extends Component {
  constructor () {
    let todaysDate = () => {
      let today = new Date()
      return `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`
    }
    super()
    this.state = {
      estimateStatus: 'main',
      modal: false
    }
  }

  findPreviousQuoteNumber(currentQuote, listOfOtherQuoteNumbers) {
    for (let i = listOfOtherQuoteNumbers.length - 1; i >= 0; i--) {
      if (listOfOtherQuoteNumbers[i] < currentQuote){
        return listOfOtherQuoteNumbers[i]
      }
    }
    return currentQuote
  }
  findNextQuoteNumber(currentQuote, listOfOtherQuoteNumbers, InitialQuoteNumber) {
    let allAvailableQuoteNumbers = [...listOfOtherQuoteNumbers, InitialQuoteNumber]

    for (let i = 0; i < allAvailableQuoteNumbers.length; i++) {
      if (allAvailableQuoteNumbers[i] > currentQuote){
        return allAvailableQuoteNumbers[i]
      }
    }
    return currentQuote
  }

  render () {
    const {dispatch, cachedQuotes, quoteNumber, InitialQuoteNumber, availableQuoteNumbers} = this.props

    let shoppingCart = cachedQuotes[quoteNumber].shoppingCart;
    let total = 0
    shoppingCart.forEach((item) => {
      total += (item.Labor + item.Material) * item.quantity
    })

    let formCellEntryStyle = {
      paddingLeft: 0,
      color: 'black'
    }
    let todaysDate = () => {
      let today = new Date()
      return `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`
    }
    let shoppingCartFunction = () => {
      return shoppingCart.map((shoppingCartItem) => {
        return (
          <ShoppingCartItem key={shoppingCartItem.keyCode + shoppingCartItem.template} {...shoppingCartItem} />
        )
      })
    }
    let defaultState = {
      salesman: '',
      customerFirstName: '',
      customerLastName: '',
      email: '',
      projectDescription: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      specification: '',
      phone: '',
      fax: '',
      date: todaysDate(),
      estimateStatus: 'main'
    }
    let bottomButtonStyle = {
      marginLeft: '5px',
      marginRight: '5px',
      verticalAlign: 'middle'
    }
    let innerTextCellStyle = {padding: '0', color: 'black'}

    // possible form item generator for later. seems to be too many one-off cases
    const formFieldGenerator = (labelSize, labelName, fields) => {
      let fieldsGenerator = (itemFields) => {
        return itemFields.map((formItem) => {
          return (
            <Col sm={formItem.size} style={formItem.cellStyle}>
              <FormControl type='text' placeholder={formItem.placeholder} onChange={formItem.onChangeFunction} style={formItem.innerStyle} />
            </Col>
          )
        })
      }
      return (
        <FormGroup controlId='formValidationWarning1' validationState='null'>
          <Col sm={labelSize}>
            <ControlLabel>{labelName}</ControlLabel>
          </Col>
          {fieldsGenerator(fields)}
        </FormGroup>
      )
    }

    switch (this.state.estimateStatus) {
      case 'pdf':
        return (
          <EstimatePDF {...this.state} handleEstimateStartOver={() => { this.setState(defaultState) }} />
        )
      case 'main':
        return (
          <Grid fluid>
            <Row>
              <Col sm={12} style={{textAlign: 'center', margin: '10px auto 20px auto'}}>
                <h3>
                  Pro Builders Express Estimator WorkSheet
                </h3>
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
                        <th>Material</th>
                        <th>Labor</th>
                        <th><Glyphicon glyph='pencil' /></th>
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
                    <Button onClick={() => { this.setState({estimateStatus: 'pdf'}) }} style={bottomButtonStyle}>Generate Estimate</Button>
                    <Button onClick={() => { if (this.props.shoppingCart.length > 0) { this.setState({estimateStatus: 'productPreview'}) } }} style={bottomButtonStyle}>Products</Button>
                    <Button onClick={() => { console.log('Shopping List') }} style={bottomButtonStyle}>Shopping List</Button>
                    <Button onClick={() => { this.setState({modal: true}) }} style={bottomButtonStyle}>Cost</Button>
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
                      let nextQuoteNumber = this.findNextQuoteNumber(quoteNumber, availableQuoteNumbers, InitialQuoteNumber);
                      if (nextQuoteNumber in cachedQuotes) {
                        dispatch(actions.setQuote(nextQuoteNumber))
                      } else {
                        let nextQuote = databaseSimulation.retrieveQuote(nextQuoteNumber)
                        dispatch(actions.addQuoteToCache(nextQuote))
                        dispatch(actions.setQuote(nextQuoteNumber))
                      }
                    }}>{`<`}</Button>
                    <Button> Quote </Button>
                    <Button onClick={() => {
                      let previousQuoteNumber = this.findPreviousQuoteNumber(quoteNumber, availableQuoteNumbers);
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
                  <h5>Grand Total with Tax : ${parseFloat(total).toFixed(2)}</h5>
                </Panel>
              </Col>
            </Row>
          </Grid>
        )
      case 'productPreview':
        return (
          <ProductPreview quoteNumber={this.state.quoteNumber} handleEstimateStartOver={() => { this.setState({estimateStatus: 'main'}) }} />
        )
    }
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
