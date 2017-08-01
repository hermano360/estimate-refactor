import React, {Component} from 'react'
import { Button, Row, Col, Grid, FormControl, ControlLabel, FormGroup, Form, Image, Clearfix} from 'react-bootstrap';


class Products extends Component {

   constructor(){
    super()
    this.state = {
    }
  }
  render(){

    return (
      <Grid fluid={true}>
        <Row>
          <Col>
            Pro Builders Express Material List
          </Col>
        </Row>
        <Row>
          <Col sm={7} className="center-block" >
            <Row>
                <FormGroup controlId="formControlsSelect">
                  <Col sm={3}>
                    <ControlLabel>Product Group</ControlLabel>
                  </Col>
                  <Col sm={9}>
                    <FormControl componentClass="select" placeholder="select">
                      <option value="select">select</option>
                      <option value="other">Drywall</option>
                    </FormControl>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formControlsSelect">
                  <Col sm={3}>
                    <ControlLabel>Supplier</ControlLabel>
                  </Col>
                  <Col sm={9}>
                    <FormControl componentClass="select" placeholder="select">
                      <option value="select">select</option>
                      <option value="other">HomeDepot</option>
                    </FormControl>
                  </Col>
                </FormGroup>
                <FormGroup controlId="formValidationWarning1" validationState="warning">
                  <Col sm={3}>
                    <ControlLabel>Key Code</ControlLabel>
                  </Col>
                  <Col sm={9}>
                    <FormControl type="text" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formValidationWarning1" validationState="warning">
                  <Col sm={3}>
                    <ControlLabel>Product Name</ControlLabel>
                  </Col>
                  <Col sm={9}>
                    <FormControl type="text" />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formValidationWarning1" validationState="warning">
                  <Col sm={3}>
                    <ControlLabel>Key Code</ControlLabel>
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
                    <FormControl componentClass="textarea" placeholder="textarea" rows="4"/>
                  </Col>
               </FormGroup>
               <FormGroup controlId="formControlsTextarea">
                 <Col sm={3}>
                   <ControlLabel>Picture</ControlLabel>
                 </Col>
                 <Col sm={9}>
                   <Image src="http://cdn.homeadvisor.com/files/eid/8700000/8707399/2395760.jpg?modifyDateTime=1391029484000" responsive={true} />
                 </Col>
              </FormGroup>
            </Row>
          </Col>
          <Col sm={5}>
            <FormGroup controlId="formValidationWarning1" validationState="warning">
              <Col sm={4}>
                <ControlLabel>Labor Cost</ControlLabel>
              </Col>
              <Col sm={8}>
                <FormControl type="text" />
              </Col>
            </FormGroup>
            <FormGroup controlId="formValidationWarning1" validationState="warning">
              <Col sm={4}>
                <ControlLabel>SKU#</ControlLabel>
              </Col>
              <Col sm={8}>
                <FormControl type="text" />
              </Col>
            </FormGroup>
            <FormGroup controlId="formValidationWarning1" validationState="warning">
              <Col sm={4}>
                <ControlLabel>ModelNo</ControlLabel>
              </Col>
              <Col sm={8}>
                <FormControl type="text" />
              </Col>
            </FormGroup>
            <FormGroup controlId="formValidationWarning1" validationState="warning">
              <Col sm={4}>
                <ControlLabel>Sort Order</ControlLabel>
              </Col>
              <Col sm={8}>
                <FormControl type="text" />
              </Col>
            </FormGroup>
            <FormGroup controlId="formValidationWarning1" validationState="warning">
              <Col sm={4}>
                <ControlLabel>Updated</ControlLabel>
              </Col>
              <Col sm={8}>
                <FormControl type="text" />
              </Col>
            </FormGroup>
            <FormGroup controlId="formValidationWarning1" validationState="warning">
              <Col sm={4}>
                <ControlLabel>UOM</ControlLabel>
              </Col>
              <Col sm={8}>
                <FormControl type="text" />
              </Col>
            </FormGroup>
            <FormGroup controlId="formValidationWarning1" validationState="warning">
              <Col sm={4}>
                <ControlLabel>Material Cost</ControlLabel>
              </Col>
              <Col sm={8}>
                <FormControl type="text" />
              </Col>
            </FormGroup>
            <Clearfix visibleSmBlock></Clearfix>
            <FormGroup controlId="formValidationWarning1" validationState="warning">
              <Col sm={4}>
                <ControlLabel>Misc.</ControlLabel>
              </Col>
              <Col sm={8}>
                <FormControl type="text" />
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Button onClick={this.props.backToMainPage}>Back</Button>
        </Row>
      </Grid>
      )
  }
}

export default Products
