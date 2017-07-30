import React, {Component} from 'react'
import { Button, Row, Col, Grid } from 'react-bootstrap';


class StartPage extends Component {

   constructor(){
    super()
    this.state = {
      page:'intro'
    }
    this.handleNewEstimate=this.handleNewEstimate.bind(this)
  }
  handleNewEstimate(){
  	this.props.newEstimate()
  }


  render(){
    return (
      <Grid fluid={true} style={{textAlign:'center'}}>
      <Row>
        <Col xs={6}>
          <img src="http://cdn.homeadvisor.com/files/eid/8700000/8707399/2395760.jpg?modifyDateTime=1391029484000" style={{width:'100px',height:'100px','marginLeft':'5%','marginRight':'20px','float':'left'}}/>
        </Col>
        <Col xs={6}>
          <Row>
            <Col xs={12}>
              <Button bsStyle="primary">Phone list</Button>
            </Col>
            <Col xs={6}>
              <Button bsStyle="primary">Products</Button>
            </Col>
            <Col xs={6}>
              <Button bsStyle="primary">Estimates</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      </Grid>
      )
  }
}

export default StartPage
