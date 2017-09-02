import React, {Component} from 'react'
import {Glyphicon} from 'react-bootstrap'
var actions = require('../../actions/actions.js')
var {connect} = require('react-redux')

class ShoppingCartItem extends Component {
  constructor () {
    super()
    this.onQuantityChange = this.onQuantityChange.bind(this)
  }
  componentDidMount () {
    console.log(this.props)
  }
  onQuantityChange (keycode, template, quantity) {
    if (typeof parseFloat(quantity) === 'number') {
      this.props.onQuantityChange(keycode, template, parseFloat(quantity))
    }
  }

  render () {
    let {Labor, Material, UOM, Description, keyCode, quantity, template} = this.props
    return (
      <tr>
        <td>{keyCode}</td>
        <td>
          <input type='text' defaultValue={quantity} onChange={(e) => { this.onQuantityChange(keyCode, template, e.target.value) }} />
        </td>
        <td>{UOM}</td>
        <td>{Description}</td>
        <td>${(Material * quantity).toFixed(2)}</td>
        <td>${(Labor * quantity).toFixed(2)}</td>
        <td><Glyphicon glyph='pencil' /></td>
        <td onClick={(e) => { this.props.onItemDelete(keyCode, template) }}><Glyphicon glyph='remove' /></td>
      </tr>
    )
  }
}

export default connect(
  (state) => {
    return{
      shoppingCart: state.shoppingCart
    }
  }
)(ShoppingCartItem)
