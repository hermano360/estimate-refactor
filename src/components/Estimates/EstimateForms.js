import React, {Component} from 'react'
import {Row, Col, FormGroup, ControlLabel, FormControl, Clearfix} from 'react-bootstrap'
var actions = require('../../actions/actions.js')
var {connect} = require('react-redux')

class EstimateForms extends Component {
  constructor(){
    super()
    this.cake = "money"
  }
  handleTemplateSelect (template) {
    let {dispatch, quoteNumber} = this.props
    // if the template selected isnt the default option
    if (template !== 'select') {
      dispatch(actions.selectTemplate(quoteNumber, template))
    }
  }
  handleQuoteChange (quote) {
    let {dispatch} = this.props
    // if the template selected isnt the default option
    if (/^\d+$/.test(quote)) {
      dispatch(actions.setQuote(quote))
    }
  }
  handleQuoteQuery (quoteNumber) {
    let {dispatch} = this.props
    // if the template selected isnt the default option
    // let quoteInformation = databaseSimulation.retrieveQuote(quoteNumber);
    // console.log('the new quote is', quote)
    if (/^\d+$/.test(quoteNumber)) {
      dispatch(actions.setQuote(quoteNumber))
    }
  }

  render () {
    let {dispatch, quoteNumber, cachedQuotes} = this.props
    let formCellEntryStyle = {
      paddingLeft: 0,
      color: 'black'
    }
    let formSpacing = {marginBottom: '10px'}

    let innerTextCellStyle = {padding: '0', color: 'black',
    backgroundColor:'#727EEE'}
    return (
      <div>
        <Col sm={4}>
          <Row>
            <Col xs={6} style={formSpacing}>
              <FormGroup controlId='formValidationWarning1' validationState={null}>
                <Col xs={12} sm={8} style={formCellEntryStyle}>
                  <FormControl type='text' placeholder='First Name' value={cachedQuotes[quoteNumber].customerFirstName} onChange={(e) => { dispatch(actions.updateQuoteInfo(quoteNumber, 'customerFirstName', e.target.value)) }} style={innerTextCellStyle} />
                </Col>
              </FormGroup>
            </Col>
            <Col xs={6} style={formSpacing}>
              <FormGroup controlId='formValidationWarning1' validationState={null}>
                <Col xs={12} sm={8} style={formCellEntryStyle}>
                  <FormControl type='text' placeholder='Last Name' value={cachedQuotes[quoteNumber].customerLastName} onChange={(e) => { dispatch(actions.updateQuoteInfo(quoteNumber, 'customerLastName', e.target.value)) }} style={innerTextCellStyle} />
                </Col>
              </FormGroup>
            </Col>
            <Col xs={12} style={formSpacing}>
              <FormGroup controlId='formValidationWarning1' validationState={null}>
                <Col xs={12} sm={8} style={formCellEntryStyle}>
                  <FormControl type='text' placeholder='Street Address' value={cachedQuotes[quoteNumber].address} onChange={(e) => { dispatch(actions.updateQuoteInfo(quoteNumber, 'address', e.target.value)) }} style={innerTextCellStyle} />
                </Col>
                <Clearfix visibleXsBlock/>
                <Col xs={4} sm={3} style={formCellEntryStyle}>
                  <FormControl type='text' placeholder='City' value={cachedQuotes[quoteNumber].city} onChange={(e) => { dispatch(actions.updateQuoteInfo(quoteNumber, 'city', e.target.value)) }} style={innerTextCellStyle} />
                </Col>
                <Col xs={4} sm={2} style={formCellEntryStyle}>
                  <FormControl type='text' placeholder='State' value={cachedQuotes[quoteNumber].state} onChange={(e) => { dispatch(actions.updateQuoteInfo(quoteNumber, 'state', e.target.value)) }} style={innerTextCellStyle} />
                </Col>
                <Col xs={4} sm={3} style={formCellEntryStyle}>
                  <FormControl type='text' placeholder='ZIP' value={cachedQuotes[quoteNumber].zipcode} onChange={(e) => { dispatch(actions.updateQuoteInfo(quoteNumber, 'zipcode', e.target.value)) }} style={innerTextCellStyle} />
                </Col>
              </FormGroup>
            </Col>
            <Col xs={6} style={formSpacing}>
              <FormGroup controlId='formControlsSelect'>
              <Col xs={12}  style={formCellEntryStyle}>
                <FormControl componentClass='select' value={cachedQuotes[quoteNumber].salesman} onChange={(e) => dispatch(actions.updateQuoteInfo(quoteNumber, 'salesman', e.target.value))} style={innerTextCellStyle} >
                  <option value=''>Select Estimater</option>
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
            </Col>
            <Col xs={6} style={formSpacing}>
              <FormGroup controlId='formValidationWarning1' validationState={null}>
                <Col xs={12} style={formCellEntryStyle} onChange={(e) => { dispatch(actions.updateQuoteInfo(quoteNumber, 'phone', e.target.value)) }}>
                  <FormControl type='text' placeholder='Phone' style={innerTextCellStyle} value={cachedQuotes[quoteNumber].phone} />
                </Col>
              </FormGroup>
            </Col>
            <Col xs={6} style={formSpacing}>
              <FormGroup controlId='formValidationWarning1' validationState={null}>
                <Col xs={12}  style={formCellEntryStyle}>
                  <FormControl type='text' value={`Quote No-${quoteNumber}`} readOnly style={innerTextCellStyle} />
                </Col>
              </FormGroup>
            </Col>
            <Col xs={6} style={formSpacing}>
              <FormGroup controlId='formValidationWarning1' validationState={null}>
                <Col xs={12}  style={formCellEntryStyle}>
                  <FormControl type='text' value={cachedQuotes[quoteNumber].date} onChange={(e) => { dispatch(actions.updateQuoteInfo(quoteNumber, 'date', e.target.value)) }} style={innerTextCellStyle} />
                </Col>
              </FormGroup>
            </Col>
            <Col xs={12} style={formSpacing}>
              <FormGroup controlId='formControlsTextarea' validationState={null}>
               <Col xs={12} style={formCellEntryStyle}>
                 <FormControl componentClass='textarea' placeholder='Project Description' rows='3' value={cachedQuotes[quoteNumber].projectDescription} onChange={(e) => { dispatch(actions.updateQuoteInfo(quoteNumber, 'projectDescription', e.target.value)) }} style={innerTextCellStyle} />
               </Col>
             </FormGroup>
            </Col>
            <Col xs={12} style={formSpacing}>
                <FormGroup controlId='formControlsTextarea' validationState={null}>
                  <Col xs={12} style={formCellEntryStyle}>
                    <FormControl componentClass='textarea' placeholder='Scope Of Work' rows='3' value={cachedQuotes[quoteNumber].specification} onChange={(e) => { dispatch(actions.updateQuoteInfo(quoteNumber, 'specification', e.target.value)) }} style={innerTextCellStyle} />
                  </Col>
                </FormGroup>
            </Col>
            <Col xs={12} style={formSpacing}>
              <FormGroup controlId='formControlsSelect'>
                <Col xs={12} style={{paddingLeft: 0, color: 'black', textAlign:'center'}} >
                  <ControlLabel>Select Template</ControlLabel>
                </Col>
                <Col sm={12} style={formCellEntryStyle}>
                  <FormControl componentClass='select' onChange={(e) => { this.handleTemplateSelect(e.target.value) }} style={innerTextCellStyle}>
                    <option value='select' onClick={() => { console.log('Selected select') }}>Select</option>
                    <option value='Demolition'>Demolition</option>
                    <option value='Foundation/Footings'>Foundation/Footings</option>
                    <option value='Bathroom'>Bathroom</option>
                  </FormControl>
                </Col>
              </FormGroup>
            </Col>
          </Row>
        </Col>

        {/* <Col sm={4}>
          <Row>
            <FormGroup controlId='formValidationWarning1' validationState={null}>
              <Col sm={4}>
                <ControlLabel>Email</ControlLabel>
              </Col>
              <Col sm={8} style={formCellEntryStyle} onChange={(e) => { dispatch(actions.updateQuoteInfo(quoteNumber, 'email', e.target.value)) }}>
                <FormControl type='text' placeholder='customer@email.com' style={innerTextCellStyle} value={cachedQuotes[quoteNumber].email} />
              </Col>
            </FormGroup>
            <FormGroup controlId='formValidationWarning1' validationState={null}>
              <Col sm={4}>
                <ControlLabel>Fax</ControlLabel>
              </Col>
              <Col sm={8} style={formCellEntryStyle} onChange={(e) => { dispatch(actions.updateQuoteInfo(quoteNumber, 'fax', e.target.value)) }}>
                <FormControl type='text' placeholder='555-123-1234' style={innerTextCellStyle} value={cachedQuotes[quoteNumber].fax} />
              </Col>
            </FormGroup>
          </Row>
        </Col> */}
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      quoteNumber: state.quoteNumber,
      cachedQuotes: state.cachedQuotes
    }
  }
)(EstimateForms)
