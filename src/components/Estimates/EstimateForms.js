import React, {Component} from 'react'
import {Row, Col, FormGroup, ControlLabel, FormControl, Clearfix} from 'react-bootstrap'
var actions = require('../../actions/actions.js')
var {connect} = require('react-redux')

class EstimateForms extends React.Component {
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
    let {dispatch, quoteNumber, cachedQuotes, shoppingCartDOMNodes} = this.props
    let formCellEntryStyle = {
      paddingLeft: '0px',
      paddingRight: '5px',
      color: 'black'
    }
    let formSpacing = {marginBottom: '5px'}

    let innerTextCellStyle = {padding: '0', color: 'black'}
    return (
      <div>
        <Col xs={12}>
          <Row>

            {/* First Last Name  */}

            <Col xs={12} style={formSpacing}>
              <FormGroup controlId='formValidationWarning1' validationState={null}>
                <Col xs={6} style={formCellEntryStyle}>
                  <input className="form-control" type='text' placeholder='First Name'
                    ref={(input) => {
                      if(shoppingCartDOMNodes['firstName'] === undefined && input !== null){
                        dispatch(actions.setShoppingCartNode('firstName', input))
                      }
                    }}
                    value={cachedQuotes[quoteNumber].customerFirstName}
                    onChange={(e) => { dispatch(actions.updateQuoteInfo(quoteNumber, 'customerFirstName', e.target.value)) }}
                    style={innerTextCellStyle}
                    onKeyPress={(e)=>{if(e.charCode === 13) { shoppingCartDOMNodes['lastName'].focus() }}} />
                </Col>
                <Col xs={6} style={formCellEntryStyle}>
                  <input type="text" placeholder="Last Name" className='form-control'
                    ref={(input) => {
                      if(shoppingCartDOMNodes['lastName'] === undefined && input !== null){
                        dispatch(actions.setShoppingCartNode('lastName', input))
                      }
                     }}
                    value={cachedQuotes[quoteNumber].customerLastName}
                    onChange={(e) => { dispatch(actions.updateQuoteInfo(quoteNumber, 'customerLastName', e.target.value)) }}
                    style={innerTextCellStyle}
                    onKeyPress={(e)=>{if(e.charCode === 13) { shoppingCartDOMNodes['streetAddress'].focus()}}}
                    />
                </Col>
              </FormGroup>
            </Col>

            {/* Street Address  */}

            <Col xs={12} style={formSpacing}>
              <FormGroup controlId='formValidationWarning1' validationState={null}>
                <Col xs={12}  style={formCellEntryStyle}>
                  <input type='text' placeholder='Street Address' className="form-control"
                    ref={(input) => {
                      if(shoppingCartDOMNodes['streetAddress'] === undefined && input !== null){
                        dispatch(actions.setShoppingCartNode('streetAddress', input))
                      }
                    }}
                    value={cachedQuotes[quoteNumber].address}
                    onChange={(e) => { dispatch(actions.updateQuoteInfo(quoteNumber, 'address', e.target.value)) }}
                    style={innerTextCellStyle}
                    onKeyPress={(e)=>{if(e.charCode === 13) { shoppingCartDOMNodes['city'].focus()}}}
                  />
                </Col>
              </FormGroup>
            </Col>

            {/* City State Zip */}

            <Col xs={12} style={formSpacing}>
              <FormGroup controlId='formValidationWarning1' validationState={null}>
                <Col xs={4} style={formCellEntryStyle}>
                  <input type='text' placeholder='City' className="form-control"
                    value={cachedQuotes[quoteNumber].city}
                    onChange={(e) => { dispatch(actions.updateQuoteInfo(quoteNumber, 'city', e.target.value)) }}
                    style={innerTextCellStyle}
                    ref={(input) => {
                      if(shoppingCartDOMNodes['city'] === undefined && input !== null){
                        dispatch(actions.setShoppingCartNode('city', input))
                      }
                    }}
                    onKeyPress={(e)=>{if(e.charCode === 13) { shoppingCartDOMNodes['state'].focus()}}}
                  />
                </Col>
                <Col xs={4} style={formCellEntryStyle}>
                  <input type='text' placeholder='State' className="form-control"
                    value={cachedQuotes[quoteNumber].state}
                    onChange={(e) => { dispatch(actions.updateQuoteInfo(quoteNumber, 'state', e.target.value)) }}
                    style={innerTextCellStyle}
                    ref={(input) => {
                      if(shoppingCartDOMNodes['state'] === undefined && input !== null){
                        dispatch(actions.setShoppingCartNode('state', input))
                      }
                    }}
                    onKeyPress={(e)=>{if(e.charCode === 13) { shoppingCartDOMNodes['zip'].focus()}}}
                  />
                </Col>
                <Col xs={4}  style={formCellEntryStyle}>
                  <input type='text' placeholder='ZIP' className="form-control"
                    value={cachedQuotes[quoteNumber].zipcode}
                    onChange={(e) => { dispatch(actions.updateQuoteInfo(quoteNumber, 'zipcode', e.target.value)) }}
                    style={innerTextCellStyle}
                    ref={(input) => {
                      if(shoppingCartDOMNodes['zip'] === undefined && input !== null){
                        dispatch(actions.setShoppingCartNode('zip', input))
                      }
                    }}
                    onKeyPress={(e)=>{if(e.charCode === 13) { shoppingCartDOMNodes['phone'].focus()}}}
                  />
                </Col>
              </FormGroup>
            </Col>

            {/* Phone Email*/}

            <Col xs={12} style={formSpacing}>
              <FormGroup controlId='formValidationWarning1' validationState={null}>
                <Col xs={6} style={formCellEntryStyle}>
                  <input type='text' placeholder='Phone' className="form-control"
                    value={cachedQuotes[quoteNumber].phone}
                    onChange={(e) => { dispatch(actions.updateQuoteInfo(quoteNumber, 'phone', e.target.value)) }}
                    style={innerTextCellStyle}
                    ref={(input) => {
                      if(shoppingCartDOMNodes['phone'] === undefined && input !== null){
                        dispatch(actions.setShoppingCartNode('phone', input))
                      }
                    }}
                    onKeyPress={(e)=>{if(e.charCode === 13) { shoppingCartDOMNodes['email'].focus()}}}
                   />
                </Col>
                <Col xs={6} style={formCellEntryStyle} >
                  <input type='text' placeholder='Email' className='form-control'
                    style={innerTextCellStyle}
                    value={cachedQuotes[quoteNumber].email}
                    onChange={(e) => { dispatch(actions.updateQuoteInfo(quoteNumber, 'email', e.target.value)) }}
                    style={innerTextCellStyle}
                    ref={(input) => {
                      if(shoppingCartDOMNodes['email'] === undefined && input !== null){
                        dispatch(actions.setShoppingCartNode('email', input))
                      }
                    }}
                    onKeyPress={(e)=>{if(e.charCode === 13) { shoppingCartDOMNodes['scopeofwork'].focus()}}}/>
                </Col>
              </FormGroup>
            </Col>

            {/* Estimator and Date*/}

            <Col xs={12} style={formSpacing}>
              <FormGroup controlId='formControlsSelect'>
              <Col xs={6}  style={formCellEntryStyle}>
                <FormControl componentClass='select' value={cachedQuotes[quoteNumber].salesman} onChange={(e) => dispatch(actions.updateQuoteInfo(quoteNumber, 'salesman', e.target.value))} style={innerTextCellStyle} >
                  <option value=''>Estimator</option>
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
              {/*  Date TODO convert to datepicker */}
              <Col xs={6}  style={formCellEntryStyle}>
                <input type='text' className="form-control"
                  value={cachedQuotes[quoteNumber].date}
                  onChange={(e) => { dispatch(actions.updateQuoteInfo(quoteNumber, 'date', e.target.value)) }}
                  style={innerTextCellStyle}
                />
              </Col>
              </FormGroup>
            </Col>




            {/* <Col xs={12} style={formSpacing}>
              <FormGroup controlId='formControlsTextarea' validationState={null}>
               <Col xs={12} style={formCellEntryStyle}>
                 <FormControl componentClass='textarea' placeholder='Project Description' rows='3' value={cachedQuotes[quoteNumber].projectDescription} onChange={(e) => { dispatch(actions.updateQuoteInfo(quoteNumber, 'projectDescription', e.target.value)) }} style={innerTextCellStyle} />
               </Col>
             </FormGroup>
            </Col> */}

            <Col xs={12} style={formSpacing}>
                <FormGroup controlId='formControlsTextarea' validationState={null}>
                  <Col xs={12} style={formCellEntryStyle}>
                    <textarea placeholder='Scope Of Work' className="form-control" rows='3'
                      value={cachedQuotes[quoteNumber].specification}
                      onChange={(e) => { dispatch(actions.updateQuoteInfo(quoteNumber, 'specification', e.target.value)) }}
                      style={innerTextCellStyle}
                      ref={(input) => {
                        if(shoppingCartDOMNodes['scopeofwork'] === undefined && input !== null){
                          dispatch(actions.setShoppingCartNode('scopeofwork', input))
                        }
                      }}
                      onKeyPress={(e)=>{
                        if(e.charCode === 13) {
                          if(shoppingCartDOMNodes['1']=== undefined){
                            shoppingCartDOMNodes['firstName'].focus()
                          } else {
                            shoppingCartDOMNodes['1'].select()
                          }
                      }}}
                    />
                  </Col>
                </FormGroup>
            </Col>
            <Col xs={12} style={{height:"10px", width:'100vw', backgroundColor:"#2DA850"}}>
            </Col>

            {/* <Col xs={12} style={formSpacing}>
              <FormGroup controlId='formControlsSelect'>
                <Col xs={12} style={{paddingLeft: 0, color: 'black', textAlign:'center'}} >
                  <ControlLabel>Select Template</ControlLabel>
                </Col>
                <Col xs={12} style={formCellEntryStyle}>
                  <FormControl componentClass='select' onChange={(e) => { this.handleTemplateSelect(e.target.value) }} style={innerTextCellStyle}>
                    <option value='select' onClick={() => { console.log('Selected select') }}>Select</option>
                    <option value='Demolition'>Demolition</option>
                    <option value='Foundation/Footings'>Foundation/Footings</option>
                    <option value='Bathroom'>Bathroom</option>
                  </FormControl>
                </Col>
              </FormGroup>
            </Col> */}
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
      cachedQuotes: state.cachedQuotes,
      shoppingCartDOMNodes: state.shoppingCartDOMNodes
    }
  }
)(EstimateForms)
