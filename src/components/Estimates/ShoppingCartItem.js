import React, {Component} from 'react'
import {Glyphicon} from 'react-bootstrap'
var actions = require('../../actions/actions.js')
var {connect} = require('react-redux')

class ShoppingCartItem extends Component {
  constructor(){
    super()
    this.state = {
      descriptionStyle : {
        padding: '0', height: '2.5em', width: '100%'
      }
    }
  }
  onQuantityChange (keyCode, template, quantity) {
    const {dispatch, quoteNumber} = this.props
    if (/^[0-9]+[.]*[0-9]*$/.test(quantity)) {
      dispatch(actions.changeCartItemQuantity(quoteNumber, keyCode, template, quantity))
    } else {
      dispatch(actions.changeCartItemQuantity(quoteNumber, keyCode, template, 0))
    }
  }

  render () {
    let {Labor, Material, UOM, description, keyCode, quantity, template, dispatch, quoteNumber, number, shoppingCartDOMNodes, totalNumberOfItems} = this.props

    let focusHeight = Math.ceil(parseFloat(description.length/30)*2)
    return (
      <tr>
        <td style={{fontWeight: "bold", padding:"0px 0px 0px 3px"}}>{number}</td>
        <td style={{padding:"0px 0px 0px 3px"}}>{keyCode}</td>
        <td style={{padding:"0px 0px 0px 3px"}}>
          <input type='text' defaultValue={quantity}
            onChange={(e) => { this.onQuantityChange(keyCode, template, e.target.value) }}
            style={{maxWidth:'30px'}}
            ref={(input) => {
              if(shoppingCartDOMNodes[number.toString()] === undefined && input !== null){
                dispatch(actions.setShoppingCartNode(number.toString(), input))
              }
            }}
            onKeyPress={(e)=>{
              if(e.charCode === 13) {
                if(number===totalNumberOfItems){
                  shoppingCartDOMNodes['firstName'].focus()
                } else {
                  shoppingCartDOMNodes[(number + 1).toString()].focus()
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
      quoteNumber: state.quoteNumber,
      shoppingCartDOMNodes: state.shoppingCartDOMNodes,
      totalNumberOfItems: state.cachedQuotes[state.quoteNumber].shoppingCart.length
    }
  }
)(ShoppingCartItem)
