import React, {Component} from 'react'
import { Button, Row, Col, Grid, FormControl, ControlLabel, FormGroup, Form, Image, Clearfix} from 'react-bootstrap';
import productDetails from '../../../api/productDetails'
import productKeyCodes from '../../../api/productKeyCodes'

class Products extends Component {

   constructor(){
    super()
    this.state = {
      count:0,
      productList:[]
    }
  }
  componentWillMount(){
    let newKeyCodes = productKeyCodes.getSample(0);
    let newProductList = productDetails.getBatchProducts(newKeyCodes);
    this.setState({productList: newProductList})
  }
  render(){

    const updateProductSheet = () =>{
      let {count, productList} = this.state;
      let specifiedProduct = productList[count];
      return (
        <Row>
          <Col sm={7} className="center-block" >
            <Row>
                <FormGroup controlId="formControlsSelect">
                  <Col sm={3}>
                    <ControlLabel>Product Group</ControlLabel>
                  </Col>
                  <Col sm={9}>
                    <FormControl componentClass="select" placeholder="select" value={specifiedProduct.productGroup}>
                      <option value="select">select</option>
                      <option value="Foundation/Footings">Foundation/Footings</option>
                      <option value="Demolition">Demolition</option>
                    </FormControl>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formControlsSelect">
                  <Col sm={3}>
                    <ControlLabel>Supplier</ControlLabel>
                  </Col>
                  <Col sm={9}>
                    <FormControl componentClass="select" placeholder="" value={specifiedProduct.supplier}>
                      <option value="">select</option>
                      <option value="Home Depot">Home Depot</option>
                      <option value="Furguson">Furguson</option>
                      <option value="Harbor Freight">Harbor Freight</option>
                      <option value="N/A">N/A</option>
                    </FormControl>
                  </Col>
                </FormGroup>
                <FormGroup controlId="formValidationWarning1" validationState={null}>
                  <Col sm={3}>
                    <ControlLabel>Key Code</ControlLabel>
                  </Col>
                  <Col sm={9}>
                    <FormControl type="text" value={specifiedProduct.keyCode}/>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formValidationWarning1" validationState={null}>
                  <Col sm={3}>
                    <ControlLabel>Product Name</ControlLabel>
                  </Col>
                  <Col sm={9}>
                    <FormControl type="text" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formControlsTextarea">
                  <Col sm={3}>
                    <ControlLabel>Specification</ControlLabel>
                  </Col>
                  <Col sm={9}>
                    <FormControl componentClass="textarea" placeholder="textarea" rows="7" value={specifiedProduct.Description}/>
                  </Col>
               </FormGroup>
               <FormGroup controlId="formControlsTextarea">
                 <Col sm={3}>
                   <ControlLabel>Picture</ControlLabel>
                 </Col>
                 <Col sm={9}>
                   <Image src={specifiedProduct.picture} responsive={true} />
                 </Col>
              </FormGroup>
            </Row>
          </Col>
          <Col sm={5}>
            <FormGroup controlId="formValidationWarning1" validationState={null}>
              <Col sm={4}>
                <ControlLabel>Labor Cost</ControlLabel>
              </Col>
              <Col sm={8}>
                <FormControl type="text" value={`$${specifiedProduct.Labor.toFixed(2)}`}/>
              </Col>
            </FormGroup>
            <FormGroup controlId="formValidationWarning1" validationState={null}>
              <Col sm={4}>
                <ControlLabel>SKU#</ControlLabel>
              </Col>
              <Col sm={8}>
                <FormControl type="text" value={specifiedProduct.SKU} />
              </Col>
            </FormGroup>
            <FormGroup controlId="formValidationWarning1" validationState={null}>
              <Col sm={4}>
                <ControlLabel>ModelNo</ControlLabel>
              </Col>
              <Col sm={8}>
                <FormControl type="text" />
              </Col>
            </FormGroup>
            <FormGroup controlId="formValidationWarning1" validationState={null}>
              <Col sm={4}>
                <ControlLabel>Sort Order</ControlLabel>
              </Col>
              <Col sm={8}>
                <FormControl type="text" />
              </Col>
            </FormGroup>
            <FormGroup controlId="formValidationWarning1" validationState={null}>
              <Col sm={4}>
                <ControlLabel>Updated</ControlLabel>
              </Col>
              <Col sm={8}>
                <FormControl type="text" value={`${new Date(specifiedProduct.updated).getMonth()+1}/${new Date(specifiedProduct.updated).getDate()}/${new Date(specifiedProduct.updated).getFullYear()}`}/>
              </Col>
            </FormGroup>
            <FormGroup controlId="formValidationWarning1" validationState={null}>
              <Col sm={4}>
                <ControlLabel>UOM</ControlLabel>
              </Col>
              <Col sm={8}>
                <FormControl type="text" value={specifiedProduct.UOM}/>
              </Col>
            </FormGroup>
            <FormGroup controlId="formValidationWarning1" validationState={null}>
              <Col sm={4}>
                <ControlLabel>Material Cost</ControlLabel>
              </Col>
              <Col sm={8}>
                <FormControl type="text" value={`$${specifiedProduct.Material.toFixed(2)}`}/>
              </Col>
            </FormGroup>
            <Clearfix visibleSmBlock></Clearfix>
            <FormGroup controlId="formValidationWarning1" validationState={null}>
              <Col sm={4}>
                <ControlLabel>Misc.</ControlLabel>
              </Col>
              <Col sm={8}>
                <FormControl type="text" />
              </Col>
            </FormGroup>
          </Col>
        </Row>
      )
    }
    return (
      <Grid fluid={true}>
        <Row style={{textAlign:'center', marginTop:'20px'}}>
            <Col sm={12}>
              <h4>Product Inventory</h4>
            </Col>
        </Row>
        {updateProductSheet()}
        <Row>
          <Col sm={12} style={{textAlign:'center', verticalAlign:'middle', marginTop:'20px'}}>
            <Button onClick={()=>{this.setState({count: 0})}}> {"|<"}</Button>
            <Button onClick={()=>{if(this.state.count > 0) {this.setState({count: this.state.count-1})} }}> {"<"}</Button>
            <Button> {this.state.count + 1} </Button>
            <Button onClick={()=>{if(this.state.count < 8){this.setState({count: this.state.count+1})}}}>{">"}</Button>
            <Button>{">|"}</Button>
          </Col>
          <Col sm={12} style={{textAlign:'center', verticalAlign:'middle'}}>
              <Button onClick={this.props.backToMainPage}>Back</Button>
          </Col>
        </Row>
      </Grid>
      )
  }
}

export default Products
