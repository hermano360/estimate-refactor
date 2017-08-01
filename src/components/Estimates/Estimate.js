import React, {Component} from 'react'
import { Button, Row, Col, Grid, FormControl, ControlLabel, FormGroup, Form, Image, Clearfix, Table} from 'react-bootstrap';
import ShoppingCartItem from './ShoppingCartItem'
import EstimatePDF from './EstimatePDF'
import productDetails from '../../../api/productDetails'
import productKeyCodes from '../../../api/productKeyCodes'

class Estimate extends Component {

   constructor(){
     let todaysDate = () => {
       let today = new Date();
       return `${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`
     }
    super()
    this.state = {
      salesman:'',
      customerFirstName:'',
      customerLastName:'',
      email:'',
      quoteNumber:'',
      projectDescription:'',
      address:'',
      city:'',
      state:'',
      zipcode:'',
      specification:'',
      phone:'',
      fax:'',
      date:todaysDate(),
      shoppingCart:[],
      generateEstimate: false
    }
    this.handleTemplateSelect = this.handleTemplateSelect.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.generateEstimatePDF = this.generateEstimatePDF.bind(this)
  }
  handleQuantityChange(keycode, template,quantity){

    let currentShoppingCart = this.state.shoppingCart;
    let updatedShoppingCart = currentShoppingCart.map((cartItem)=>{
      if(cartItem.keyCode === keycode && cartItem.template === template){
        let newCartItem = {};
        for (let prop in cartItem){
          newCartItem[prop] = cartItem[prop];
        }
        newCartItem.quantity = quantity;
        return newCartItem
      } else {
        return cartItem
      }
    })
    this.setState({
      shoppingCart: updatedShoppingCart
    })
  }
  handleItemDelete(keycode, template){
    let currentShoppingCart = this.state.shoppingCart;
    let updatedShoppingCart = currentShoppingCart.filter((cartItem)=>{
      if(cartItem.keyCode === keycode && cartItem.template === template){
        return false
      } else {
        return true
      }
    })
    this.setState({
      shoppingCart: updatedShoppingCart
    })
  }

  handleTemplateSelect(template){
    // if the template selected isnt the default option
    if(template !== 'select'){
      // obtain all of the keyCodes for a given template
      let keyCodes = productKeyCodes[template];
      // get the item details for all of the keycodes from a given template
      let templateItems = productDetails.getBatchProducts(keyCodes);
      // get the current shopping cart for comparisions
      let currentShoppingCart = this.state.shoppingCart;
      // used to put in new items after validation
      let newShoppingCart = [];
      // go through each template item to see if it should be added to cart
      templateItems.forEach((newItem)=>{
        // assume item will be added at first
        let addToCart = true;
        //start going through the current shopping cart
        currentShoppingCart.forEach((cartItem)=>{
          // as long as there the keycode and template arent both present, item is considered valid
          // the reason is that you can add items a la cart, without template
          if(newItem.keyCode === cartItem.keyCode && template === cartItem.template){
            addToCart = false;
          }
        })
        //adding item to cart if it is indeed valid
        if(addToCart){
          let itemToAdd = {};
          for (var prop in newItem) {
            itemToAdd[prop] = newItem[prop];
          }
          itemToAdd.quantity = 0;
          itemToAdd.template = template;
          newShoppingCart.push(itemToAdd);
        }
      })
      this.setState({
        shoppingCart: [
          ...currentShoppingCart,
          ...newShoppingCart
        ]
      })
    }
  }

  generateEstimatePDF(){

  }


  render(){
    let formCellEntryStyle = {
      paddingLeft:0
    }
    let todaysDate = () => {
      let today = new Date();
      return `${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`
    }
    let shoppingCart = () =>{
      let {shoppingCart} = this.state;
      return shoppingCart.map((shoppingCartItem)=>{
        return (
          <ShoppingCartItem key={shoppingCartItem.keyCode + shoppingCartItem.template} {...shoppingCartItem} onQuantityChange={this.handleQuantityChange} onItemDelete={this.handleItemDelete}/>
        )
      })
    }
    if(this.state.generateEstimate){
      return (
        <EstimatePDF {...this.state} handleEstimateStartOver={()=>{this.setState({
          salesman:'',
          customerFirstName:'',
          customerLastName:'',
          email:'',
          quoteNumber:'',
          projectDescription:'',
          address:'',
          city:'',
          state:'',
          zipcode:'',
          specification:'',
          phone:'',
          fax:'',
          date:todaysDate(),
          shoppingCart:[],
          generateEstimate: false
        })}}/>
      )
    } else {
      return (
        <Grid fluid={true}>
          <Row>
            <Col>
              Pro Builders Express Estimator WorkSheet
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <Row>
                <FormGroup controlId="formValidationWarning1" validationState="warning">
                  <Col sm={4}>
                    <ControlLabel>Quote No</ControlLabel>
                  </Col>
                  <Col sm={8}>
                    <FormControl type="text" placeholder="next # in database"/>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formControlsSelect">
                  <Col sm={4}>
                    <ControlLabel>Salesperson</ControlLabel>
                  </Col>
                  <Col sm={8}>
                    <FormControl componentClass="select" placeholder="select" onChange={(e)=>{this.setState({salesman:e.target.value})}} >
                      <option value="select">select</option>
                      <option value="Gary Banks">Banks, Gary</option>
                      <option value="John Chavez">Chavez, John</option>
                      <option value="Arnold Corona">Corona, Arnold</option>
                      <option value="John Gutierrez">Gutierrez, John</option>
                      <option value="Bob Leon">Leon, Bob</option>
                      <option value="Ricardo Rivera">Rivera, Ricardo</option>
                      <option value="Mike Rogers">Rogers, Mike</option>
                      <option value="Cameron Sterling">Sterling, Cameron</option>
                    </FormControl>
                  </Col>
                </FormGroup>
                <FormGroup controlId="formValidationWarning1" validationState="warning">
                  <Col sm={4}>
                    <ControlLabel>Start Date</ControlLabel>
                  </Col>
                  <Col sm={8}>
                    <FormControl type="text" defaultValue={todaysDate()} onChange={(e)=>{this.setState({date: e.target.value})}}/>
                  </Col>
                </FormGroup>
                <FormGroup controlId="formValidationWarning1" validationState="warning" onChange={(e)=>{this.setState({projectDescription: e.target.value})}}>
                  <Col sm={4}>
                    <ControlLabel>Project Desc.</ControlLabel>
                  </Col>
                  <Col sm={8}>
                    <FormControl type="text" placeholder="Description" onChange={(e)=>{this.setState({projectDescription: e.target.value})}}/>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formControlsSelect">
                  <Col sm={4}>
                    <ControlLabel>Template</ControlLabel>
                  </Col>
                  <Col sm={8}>
                    <FormControl componentClass="select" onChange={(e)=>{this.handleTemplateSelect(e.target.value)}}>
                      <option value="select">select</option>
                      <option value="Demolition">Demolition</option>
                      <option value="Foundation/Footings">Foundation/Footings</option>
                    </FormControl>
                  </Col>
                </FormGroup>
              </Row>
            </Col>

            <Col sm={4}>
              <Row>
                <FormGroup controlId="formValidationWarning1" validationState="warning">
                  <Col sm={4}>
                    <ControlLabel>Name</ControlLabel>
                  </Col>
                  <Col sm={4} style={formCellEntryStyle}>
                    <FormControl type="text" placeholder="First" onChange={(e)=>{this.setState({customerFirstName: e.target.value})}}/>
                  </Col>
                  <Col sm={4} style={formCellEntryStyle}>
                    <FormControl type="text" placeholder="Last" onChange={(e)=>{this.setState({customerLastName: e.target.value})}}/>
                  </Col>
                </FormGroup>
                <FormGroup controlId="formValidationWarning1" validationState="warning">
                  <Col sm={4}>
                    <ControlLabel>Address</ControlLabel>
                  </Col>
                  <Col sm={8} style={formCellEntryStyle}>
                    <FormControl type="text" placeholder="123 Main Street" onChange={(e)=>{this.setState({address: e.target.value})}}/>
                  </Col>
                </FormGroup>
                <FormGroup controlId="formValidationWarning1" validationState="warning">
                  <Col sm={4}>
                    <ControlLabel>City</ControlLabel>
                  </Col>
                  <Col sm={3} style={formCellEntryStyle}>
                    <FormControl type="text" placeholder="City" onChange={(e)=>{this.setState({city: e.target.value})}}/>
                  </Col>
                  <Col sm={2} style={formCellEntryStyle}>
                    <FormControl type="text" placeholder="CA" onChange={(e)=>{this.setState({state: e.target.value})}}/>
                  </Col>
                  <Col sm={3} style={formCellEntryStyle}>
                    <FormControl type="text" placeholder="ZIP" onChange={(e)=>{this.setState({zipcode: e.target.value})}}/>
                  </Col>
                </FormGroup>

              </Row>

            </Col>
            <Col sm={4}>
              <Row>
                <FormGroup controlId="formValidationWarning1" validationState="warning">
                  <Col sm={4}>
                    <ControlLabel>Email</ControlLabel>
                  </Col>
                  <Col sm={8} style={formCellEntryStyle} onChange={(e)=>{this.setState({email: e.target.value})}}>
                    <FormControl type="text" placeholder="customer@email.com"/>
                  </Col>
                </FormGroup>
                <FormGroup controlId="formValidationWarning1" validationState="warning">
                  <Col sm={4}>
                    <ControlLabel>Phone</ControlLabel>
                  </Col>
                  <Col sm={8} style={formCellEntryStyle}  onChange={(e)=>{this.setState({phone: e.target.value})}}>
                    <FormControl type="text" placeholder="555-123-1234"/>
                  </Col>
                </FormGroup>
                <FormGroup controlId="formValidationWarning1" validationState="warning">
                  <Col sm={4}>
                    <ControlLabel>Fax</ControlLabel>
                  </Col>
                  <Col sm={8} style={formCellEntryStyle} onChange={(e)=>{this.setState({fax: e.target.value})}}>
                    <FormControl type="text"  placeholder="555-1234-123"/>
                  </Col>
                </FormGroup>
              </Row>
            </Col>
            <Col sm={8}>
              <Row>
                <FormGroup controlId="formControlsTextarea">
                  <Col sm={2}>
                    <ControlLabel>Specification</ControlLabel>
                  </Col>
                  <Col sm={10} style={formCellEntryStyle}>
                    <FormControl componentClass="textarea" placeholder="Specification" rows="2" onChange={(e)=>{this.setState({specification: e.target.value})}}/>
                  </Col>
               </FormGroup>
              </Row>
            </Col>
            <Col sm={12}>
              <div style={{height:"50vh", overflow:'scroll'}}>
                <Table striped bordered condensed hover>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Amt</th>
                      <th>Unit</th>
                      <th>Description</th>
                      <th>Material</th>
                      <th>Labor</th>
                      <th>E</th>
                      <th>X</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shoppingCart()}
                  </tbody>
                </Table>
              </div>
              <Table striped bordered condensed hover>
                <tbody>
                  <tr>
                    <td colSpan="8" onClick={()=>{console.log("add custom item")}}>Add Item</td>
                  </tr>
                </tbody>

              </Table>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Button onClick={this.props.backToMainPage}>Back</Button>
              <Button onClick={()=>{this.setState({generateEstimate: true})}}>Generate Estimate</Button>
              <Button onClick={()=>{console.log("Product Preview")}}>Product Preview</Button>
              <Button onClick={()=>{console.log("Shopping List")}}>Shopping List</Button>
            </Col>
          </Row>
        </Grid>
        )
    }

  }
}

export default Estimate
