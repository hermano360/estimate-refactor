import React, {Component} from 'react'

class ShoppingCartItem extends Component {

   constructor(){
    super()
    this.state = {
    }
    this.onQuantityChange = this.onQuantityChange.bind(this);
  }
  componentDidMount(){
    console.log(this.props);
  }
  onQuantityChange(keycode, template,quantity){
    if(parseFloat(quantity) !== NaN){
      this.props.onQuantityChange(keycode, template, parseFloat(quantity))
    }
  }


  render(){
    let {Labor, Material, UOM,Description, keyCode, quantity,template} = this.props;
    return (
      <tr>
        <td>{keyCode}</td>
        <td>
          <input type="text" defaultValue={quantity} onChange={(e)=>{this.onQuantityChange(keyCode,template, e.target.value)}}/>
        </td>
        <td>{UOM}</td>
        <td>{Description}</td>
        <td>{Material}</td>
        <td>{Labor}</td>
        <td>e</td>
        <td onClick={(e)=>{this.props.onItemDelete(keyCode,template)}}>x</td>
      </tr>
      )
  }
}

export default ShoppingCartItem
