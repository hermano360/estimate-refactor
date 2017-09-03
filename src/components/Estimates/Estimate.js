import React, {Component} from 'react'
import {Button, Row, Col, Grid, FormControl, ControlLabel, FormGroup, Clearfix, Table, Glyphicon, Panel, Modal} from 'react-bootstrap'
import ShoppingCartItem from './ShoppingCartItem'
import EstimatePDF from './EstimatePDF'
import ProductPreview from './ProductPreview'

var actions = require('../../actions/actions.js')
var {connect} = require('react-redux')

class Estimate extends Component {
  constructor () {
    let todaysDate = () => {
      let today = new Date()
      return `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`
    }
    super()
    this.state = {
      quoteNumber: Math.floor(Math.random() * 200),
      date: todaysDate(),
      estimateStatus: 'main',
      modal: false,
      count: 0
    }
    this.handleTemplateSelect = this.handleTemplateSelect.bind(this)
  }

  handleTemplateSelect (template) {
    console.log(template)
    let {dispatch} = this.props
    // if the template selected isnt the default option
    if (template !== 'select') {
      dispatch(actions.selectTemplate(template))
    }
  }

  render () {
    const {dispatch, shoppingCart, customerInformation} = this.props
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
              <Col sm={4}>
                <Row>
                  <FormGroup controlId='formValidationWarning1' validationState='null'>
                    <Col sm={4}>
                      <ControlLabel>Quote No</ControlLabel>
                    </Col>
                    <Col sm={8}>
                      <FormControl type='text' defaultValue={this.state.quoteNumber} style={innerTextCellStyle} />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId='formControlsSelect'>
                    <Col sm={4}>
                      <ControlLabel>Salesperson</ControlLabel>
                    </Col>
                    <Col sm={8}>
                      <FormControl componentClass='select' placeholder='select' onChange={(e) => dispatch(actions.updateCustomerInfo('salesman', e.target.value))} style={innerTextCellStyle} >
                        <option value='select'>Salesperson</option>
                        <option value='Gary Banks'>Banks, Gary</option>
                        <option value='John Chavez'>Chavez, John</option>
                        <option value='Arnold Corona'>Corona, Arnold</option>
                        <option value='John Gutierrez'>Gutierrez, John</option>
                        <option value='Bob Leon'>Leon, Bob</option>
                        <option value='Ricardo Rivera'>Rivera, Ricardo</option>
                        <option value='Mike Rogers'>Rogers, Mike</option>
                        <option value='Cameron Sterling'>Sterling, Cameron</option>
                      </FormControl>
                    </Col>
                  </FormGroup>
                  <FormGroup controlId='formValidationWarning1' validationState='null'>
                    <Col sm={4}>
                      <ControlLabel>Start Date</ControlLabel>
                    </Col>
                    <Col sm={8}>
                      <FormControl type='text' defaultValue={todaysDate()} onChange={(e) => { dispatch(actions.updateCustomerInfo('date', e.target.value)) }} style={innerTextCellStyle} />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId='formValidationWarning1' validationState='null'>
                    <Clearfix visibleSmBlock />
                    <Col sm={4}>
                      <ControlLabel>Project Desc.</ControlLabel>
                    </Col>
                    <Col sm={8}>
                      <FormControl type='text' placeholder='Description' onChange={(e) => { dispatch(actions.updateCustomerInfo('projectDescription', e.target.value)) }} style={innerTextCellStyle} />
                    </Col>
                  </FormGroup>

                  <FormGroup controlId='formControlsSelect'>
                    <Clearfix visibleSmBlock />
                    <Col sm={4}>
                      <ControlLabel>Template</ControlLabel>
                    </Col>
                    <Col sm={8}>
                      <FormControl componentClass='select' onChange={(e) => { this.handleTemplateSelect(e.target.value) }} style={innerTextCellStyle}>
                        <option value='select' onClick={() => { console.log('Selected select') }}>Select</option>
                        <option value='Demolition'>Demolition</option>
                        <option value='Foundation/Footings'>Foundation/Footings</option>
                      </FormControl>
                    </Col>
                  </FormGroup>
                </Row>
              </Col>

              <Col sm={4}>
                <Row>
                  <FormGroup controlId='formValidationWarning1' validationState='null'>
                    <Col sm={4}>
                      <ControlLabel>Name</ControlLabel>
                    </Col>
                    <Col sm={4} style={formCellEntryStyle}>
                      <FormControl type='text' placeholder='First' onChange={(e) => { dispatch(actions.updateCustomerInfo('customerFirstName', e.target.value)) }} style={innerTextCellStyle} />
                    </Col>
                    <Col sm={4} style={formCellEntryStyle}>
                      <FormControl type='text' placeholder='Last' onChange={(e) => { dispatch(actions.updateCustomerInfo('customerLastName', e.target.value)) }} style={innerTextCellStyle} />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId='formValidationWarning1' validationState='null'>
                    <Col sm={4}>
                      <ControlLabel>Address</ControlLabel>
                    </Col>
                    <Col sm={8} style={formCellEntryStyle}>
                      <FormControl type='text' placeholder='123 Main Street' onChange={(e) => { dispatch(actions.updateCustomerInfo('address', e.target.value)) }} style={innerTextCellStyle} />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId='formValidationWarning1' validationState='null'>
                    <Col sm={4}>
                      <ControlLabel>City</ControlLabel>
                    </Col>
                    <Col sm={3} style={formCellEntryStyle}>
                      <FormControl type='text' placeholder='City' onChange={(e) => { dispatch(actions.updateCustomerInfo('city', e.target.value)) }} style={innerTextCellStyle} />
                    </Col>
                    <Col sm={2} style={formCellEntryStyle}>
                      <FormControl type='text' placeholder='CA' onChange={(e) => { dispatch(actions.updateCustomerInfo('state', e.target.value)) }} style={innerTextCellStyle} />
                    </Col>
                    <Col sm={3} style={formCellEntryStyle}>
                      <FormControl type='text' placeholder='ZIP' onChange={(e) => { dispatch(actions.updateCustomerInfo('zipcode', e.target.value)) }} style={innerTextCellStyle} />
                    </Col>
                  </FormGroup>

                </Row>

              </Col>
              <Col sm={4}>
                <Row>
                  <FormGroup controlId='formValidationWarning1' validationState='null'>
                    <Col sm={4}>
                      <ControlLabel>Email</ControlLabel>
                    </Col>
                    <Col sm={8} style={formCellEntryStyle} onChange={(e) => { dispatch(actions.updateCustomerInfo('email', e.target.value)) }}>
                      <FormControl type='text' placeholder='customer@email.com' style={innerTextCellStyle} />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId='formValidationWarning1' validationState='null'>
                    <Col sm={4}>
                      <ControlLabel>Phone</ControlLabel>
                    </Col>
                    <Col sm={8} style={formCellEntryStyle} onChange={(e) => { dispatch(actions.updateCustomerInfo('phone', e.target.value)) }}>
                      <FormControl type='text' placeholder='555-123-1234' style={innerTextCellStyle} />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId='formValidationWarning1' validationState='null'>
                    <Col sm={4}>
                      <ControlLabel>Fax</ControlLabel>
                    </Col>
                    <Col sm={8} style={formCellEntryStyle} onChange={(e) => { dispatch(actions.updateCustomerInfo('fax', e.target.value)) }}>
                      <FormControl type='text' placeholder='555-123-1234' style={innerTextCellStyle} />
                    </Col>
                  </FormGroup>
                </Row>
              </Col>
              <Col sm={8}>
                <Row>
                  <FormGroup controlId='formControlsTextarea'>
                    <Col sm={2}>
                      <ControlLabel>Specification</ControlLabel>
                    </Col>
                    <Col sm={10} style={formCellEntryStyle}>
                      <FormControl componentClass='textarea' placeholder='Specification' rows='3' onChange={(e) => { dispatch(actions.updateCustomerInfo('specification', e.target.value)) }} style={innerTextCellStyle} />
                    </Col>
                  </FormGroup>
                </Row>
              </Col>
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
                    <Button onClick={() => { this.setState({count: 0}) }}>{'|<'}</Button>
                    <Button onClick={() => { if (this.state.count > 0) { this.setState({count: this.state.count - 1}) } }}> {'<'}</Button>
                    <Button> {this.state.count + 1} </Button>
                    <Button onClick={() => { if (this.state.count < 100) { this.setState({count: this.state.count + 1}) } }}>{'>'}</Button>
                    <Button onClick={() => { this.setState({count: 100 - 1}) }} > {'>|'}</Button>
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
      shoppingCart: state.shoppingCart,
      customerInformation: state.customerInformation
    }
  }
)(Estimate)
