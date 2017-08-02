import React, {Component} from 'react'
import { Button, Row, Col, Grid, Image, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

class ProductPreview extends Component {

   constructor(){
    super()
    this.state = {
      count:0
    }
  }



  render(){
    let {shoppingCart} = this.props;
    let specifiedProduct = shoppingCart[this.state.count];
    return (
      <Grid>
      <Row style={{textAlign:'center', marginTop:'20vh'}}>
          <Col sm={12}>
            <h4>Shopping List Preview</h4>
          </Col>
          <Col sm={4}>
            <Row>
            <FormGroup controlId="formValidationWarning1" validationState={null}>
              <Col sm={12}>
                <ControlLabel>QuoteNo</ControlLabel>
              </Col>
              <Col sm={12}>
                <FormControl type="text" value={this.props.quoteNumber} style={{textAlign:'center'}}/>
              </Col>
            </FormGroup>
            <FormGroup controlId="formValidationWarning1" validationState={null}>
              <Col sm={12}>
                <ControlLabel>SkuNo</ControlLabel>
              </Col>
              <Col sm={12}>
                <FormControl type="text" value={specifiedProduct.SKU} style={{textAlign:'center'}}/>
              </Col>
            </FormGroup>
            <FormGroup controlId="formValidationWarning1" validationState={null}>
              <Col sm={12}>
                <ControlLabel>Material Cost</ControlLabel>
              </Col>
              <Col sm={12}>
                <FormControl type="text" value={specifiedProduct.Material} style={{textAlign:'center'}}/>
              </Col>
            </FormGroup>
            <FormGroup controlId="formValidationWarning1" validationState={null}>
              <Col sm={12}>
                <ControlLabel>Unit</ControlLabel>
              </Col>
              <Col sm={12}>
                <FormControl type="text" value={specifiedProduct.UOM} style={{textAlign:'center'}}/>
              </Col>
            </FormGroup>
            </Row>
          </Col>
          <Col sm={4}>
            <FormGroup controlId="formValidationWarning1" validationState={null}>
              <Col sm={12}>
                <ControlLabel>Picture</ControlLabel>
              </Col>
              <Col sm={12}>
                <Image src={specifiedProduct.picture} responsive={true} />
              </Col>
            </FormGroup>

          </Col>
          <Col sm={4}>
            <Row>
              <FormGroup controlId="formControlsTextarea">
                <Col sm={12}>
                  <ControlLabel>Specification</ControlLabel>
                </Col>
                <Col sm={12}>
                  <FormControl componentClass="textarea" placeholder="Specification" rows="12" value={specifiedProduct.Description} style={{textAlign:'center'}}/>
                </Col>
             </FormGroup>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col sm={12} style={{textAlign:'center', verticalAlign:'middle', marginTop:'20px'}}>
            <Button onClick={()=>{this.setState({count: 0})}}> {"|<"}</Button>
            <Button onClick={()=>{if(this.state.count > 0) {this.setState({count: this.state.count-1})} }}> {"<"}</Button>
            <Button> {this.state.count + 1} </Button>
            <Button onClick={()=>{if(this.state.count < this.props.shoppingCart.length){this.setState({count: this.state.count+1})}}}>{">"}</Button>
            <Button onClick={()=>{this.setState({count: this.props.shoppingCart.length-1})}}>{">|"}</Button>
          </Col>
          <Col sm={12} style={{textAlign:'center', verticalAlign:'middle'}}>
              <Button onClick={this.props.handleEstimateStartOver}>Back</Button>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default ProductPreview
