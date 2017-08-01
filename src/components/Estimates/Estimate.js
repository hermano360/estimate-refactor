import React, {Component} from 'react'
import { Button, Row, Col, Grid, FormControl, ControlLabel, FormGroup, Form, Image, Clearfix, Table} from 'react-bootstrap';


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
      shoppingCart:[]
    }
  }


  render(){
    let formCellEntryStyle = {
      paddingLeft:0
    }
    let todaysDate = () => {
      let today = new Date();
      return `${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`
    }
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
                  <FormControl componentClass="select" onChange={(e)=>{console.log(e.target.value)}}>
                    <option value="select">select</option>
                    <option value="Bathroom">Bathroom</option>
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
          <Col>
            <div>
              <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Amt</th>
                    <th>Unit</th>
                    <th>Description</th>
                    <th>Material</th>
                    <th>Labor</th>
                  </tr>
                </thead>
                <tbody>
                  {}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
        <Row>
          <Button onClick={this.props.backToMainPage}>Back</Button>
          <Button onClick={()=>{console.log('Estimate being generated')}}>Generate Estimate</Button>
        </Row>
      </Grid>
      )
  }
}

export default Estimate
