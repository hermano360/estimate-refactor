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
    let {Labor, Material, UOM, Description, keyCode, quantity, template, dispatch, quoteNumber} = this.props

    return (
      <tr>
        <td style={{fontWeight: "bold"}}>1</td>
        <td>{keyCode}</td>
        <td >
          <input type='text' defaultValue={quantity} onChange={(e) => { this.onQuantityChange(keyCode, template, e.target.value) }} style={{maxWidth:'30px'}} />
        </td>
        <td>{UOM}</td>
        <td>
          <div style={{maxHeight: '2.5em', overflowY: 'scroll'}}>
            {Description}
          </div>
        </td>
        <td>${(Material * quantity).toFixed(2)}</td>
        <td>${(Labor * quantity).toFixed(2)}</td>
        <td onClick={() => { dispatch(actions.deleteShoppingCartItem(quoteNumber, keyCode, template)) }}><Glyphicon glyph='remove' /></td>
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
