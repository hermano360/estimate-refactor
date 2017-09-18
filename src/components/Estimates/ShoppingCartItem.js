import React, {Component} from 'react'
import {Glyphicon} from 'react-bootstrap'
var actions = require('../../actions/actions.js')
var {connect} = require('react-redux')

class ShoppingCartItem extends Component {
  onQuantityChange (keyCode, template, quantity) {
    const {dispatch, quoteNumber} = this.props
    if (/^[0-9]+[.]*[0-9]*$/.test(quantity)) {
      dispatch(actions.changeCartItemQuantity(quoteNumber, keyCode, template, quantity))
    } else {
      dispatch(actions.changeCartItemQuantity(quoteNumber, keyCode, template, 0))
    }
  }

  render () {
    let {Labor, Material, UOM, Description, keyCode, quantity, template, dispatch, quoteNumber, number} = this.props

    return (
      <tr>
        <td style={{fontWeight: "bold", padding:"0px 0px 0px 3px"}}>{number}</td>
        <td style={{padding:"0px 0px 0px 3px"}}>{keyCode}</td>
        <td style={{padding:"0px 0px 0px 3px"}}>
          <input type='text' defaultValue={quantity} onChange={(e) => { this.onQuantityChange(keyCode, template, e.target.value) }} style={{maxWidth:'30px'}} />
        </td>
        <td style={{padding:"0px 0px 0px 3px"}}>{UOM}</td>
        <td style={{padding:"0px 0px 0px 3px"}}>
          <div style={{maxHeight: '2.5em', overflowY: 'scroll'}}>
            {Description}
          </div>
        </td>
        <td style={{padding:"0px 0px 0px 3px"}}>${(Material * quantity).toFixed(2)}</td>
        <td style={{padding:"0px 0px 0px 3px"}}>${(Labor * quantity).toFixed(2)}</td>
        <td style={{padding:"0px 0px 0px 3px"}} onClick={() => { dispatch(actions.deleteShoppingCartItem(quoteNumber, keyCode, template)) }}><Glyphicon glyph='remove' /></td>
      </tr>
    )
  }
}

export default connect(
  (state) => {
    return {
      quoteNumber: state.quoteNumber
    }
  }
)(ShoppingCartItem)
