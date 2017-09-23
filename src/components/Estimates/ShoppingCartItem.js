import React, {Component} from 'react'
import {Glyphicon, Modal, Button, Table} from 'react-bootstrap'
var actions = require('../../actions/actions.js')
var {connect} = require('react-redux')

class ShoppingCartItem extends Component {
  constructor(){
    super()
    this.state = {
      descriptionStyle : {
        padding: '0', height: '2.5em', width: '100%'
      },
      modal: false
    }
  }
  onQuantityChange (keyCode, template, quantity) {
    const {dispatch, quoteNumber} = this.props
    console.log(/^[0-9]*[.]*[0-9]*$/.test(quantity))
    if (/^[0-9]*[.]*[0-9]*$/.test(quantity)) {
      dispatch(actions.changeCartItemQuantity(quoteNumber, keyCode, template, quantity))
    } else {
      dispatch(actions.changeCartItemQuantity(quoteNumber, keyCode, template, 0))
    }
  }

  render () {
    let {Labor, Material, UOM, description, keyCode, quantity, template, dispatch, quoteNumber, number, shoppingCartDOMNodes, totalNumberOfItems} = this.props
    let quantityString, materialString, laborString
    if(quantity === 0){
      quantityString = ""
    } else {
      quantityString = quantity
    }
    if(Labor === 0){
      laborString = ""
    } else {
      laborString = Labor
    }
    if(Material === 0){
      materialString = ""
    } else {
      materialString = Material
    }

    let focusHeight = Math.ceil(parseFloat(description.length/30)*2)
    let priceChangeInterface = ()=>{
      return (
      <Modal show={this.state.modal} onHide={() => { this.setState({modal: false}) }}>
        <Modal.Header closeButton>
          <Modal.Title style={{textAlign: 'center'}}>{keyCode}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{height: '40%', overflow: 'scroll'}}>
            <Table bordered condensed>
              <thead>
                <tr>
                  <th />
                  <th>$/{UOM}</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lbr</td>
                  <td>
                    <input className="form-control" type='text'
                      value={laborString}
                      onChange={(e) => { dispatch(actions.changeCartItemCosts(quoteNumber, keyCode, template, e.target.value, 'labor')) }}
                      placeholder="0"
                      // onKeyPress={(e)=>{if(e.charCode === 13) { shoppingCartDOMNodes['lastName'].focus() }}}
                    />
                  </td>
                  <td>${(Labor * quantity).toFixed(2)}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => { this.setState({modal: false}) }}>Close</Button>
        </Modal.Footer>
      </Modal>)
    }
    return (
      <tr>
        <td style={{fontWeight: "bold", padding:"0px 0px 0px 3px"}}>
          {number}
          {priceChangeInterface()}
        </td>
        <td style={{padding:"0px 0px 0px 3px"}}>{keyCode}</td>
        <td style={{padding:"0px 0px 0px 3px"}}>
          <input type='text' value={quantity}
            onChange={(e) => { this.onQuantityChange(keyCode, template, e.target.value) }}
            style={{maxWidth:'30px'}}
            ref={(input) => {
              console.log(input)
              if(shoppingCartDOMNodes[number.toString()] === undefined && input !== null){
                console.log(input)
                dispatch(actions.setShoppingCartNode(number.toString(), input))
              }
            }}
            onKeyPress={(e)=>{
              if(e.charCode === 13) {
                if(number===totalNumberOfItems){
                  shoppingCartDOMNodes['firstName'].focus()
                } else {
                  shoppingCartDOMNodes[(number + 1).toString()].select()
                }
              }
            }}

          />
        </td>
        <td style={{padding:"0px 0px 0px 3px"}}>{UOM}</td>
        <td style={{padding:"0px 0px 0px 3px"}}>
          <textarea value= {description} style={this.state.descriptionStyle}
            onFocus={()=>{
              this.setState({
                descriptionStyle: {
                  padding: '0',
                  height: `${focusHeight}em`,
                  width: '100%'
                }
              })
            }}
            onBlur={()=>{
              this.setState({
                descriptionStyle: {
                  padding: '0',
                  height: `2.5em`,
                  width: '100%'
                }
              })
            }}
            onChange={(e) => {
              dispatch(actions.changeCartItemDescription(quoteNumber, keyCode, template, e.target.value))
            }}

          />
        </td>
        <td style={{padding:"0px 0px 0px 3px"}} onClick={()=>{

          this.setState({modal:true})
        }}>
          ${(Material * quantity).toFixed(2)}
        </td>
        <td style={{padding:"0px 0px 0px 3px"}} onClick={()=>{this.setState({modal:true})}}>
          ${(Labor * quantity).toFixed(2)}
        </td>
        <td style={{padding:"0px 0px 0px 3px"}} onClick={() => { dispatch(actions.deleteShoppingCartItem(quoteNumber, keyCode, template)) }}><Glyphicon glyph='remove' /></td>
      </tr>
    )
  }
}

export default connect(
  (state) => {
    return {
      quoteNumber: state.quoteNumber,
      shoppingCartDOMNodes: state.shoppingCartDOMNodes,
      totalNumberOfItems: state.cachedQuotes[state.quoteNumber].shoppingCart.length
    }
  }
)(ShoppingCartItem)
