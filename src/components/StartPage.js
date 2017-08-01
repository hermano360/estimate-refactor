import React, {Component} from 'react'
import { Button, Row, Col, Grid } from 'react-bootstrap';


class StartPage extends Component {

   constructor(){
    super()
    this.state = {

    }
  }


  render(){
    let imageStyles = {width:'200px',height:'200px', 'marginTop': "50px"};
    let buttonContainerStyles = {height:'200px', 'marginTop': "50px"};

    let marginTopCustom = (margintop) =>{
      return {
        marginTop: `${margintop}%`
      }
    };

    let borderBoxes = {
      height: "300px",
      maxWidth: "300px",
      minWidth:"220px",
      width:"70%",
      border: "1px solid white",
      textAlign: "center",
      verticalAlign: "middle"
    };
    let menuTitle = {
      color: 'white',
      fontSize: '40px',
      margin: "40px"
    }

    return (
      <Grid fluid={true} style={{textAlign:'center', minHeight: "100vh", backgroundColor: 'black'}}>
        <Row>
          <Col sm={12} className="center-block" style={menuTitle}>
            Pro Builders Express Menu
          </Col>
        </Row>
      <Row style={marginTopCustom(10)}>
        <Col xs={12} sm={6} className="center-block">
            <div style={borderBoxes}  className="center-block">
              <img src="http://cdn.homeadvisor.com/files/eid/8700000/8707399/2395760.jpg?modifyDateTime=1391029484000" style={imageStyles}/>
            </div>
        </Col>
        <Col xs={12} sm={6}>
          <Row>
            <div style={borderBoxes}  className="center-block">
              <div style={buttonContainerStyles}>
                <Col xs={12} className="center-block" style={marginTopCustom(10)}>
                  <Button bsStyle="primary" onClick={this.props.onPhoneListClick}>Phone list</Button>
                </Col>
                <Col xs={6} className="center-block" style={marginTopCustom(10)}>
                  <Button bsStyle="primary" onClick={this.props.onProductsClick}>Products</Button>
                </Col>
                <Col xs={6} className="center-block" style={marginTopCustom(10)}>
                  <Button bsStyle="primary" onClick={this.props.onEstimateClick}>Estimates</Button>
                </Col>
              </div>
          </div>
          </Row>
        </Col>
      </Row>
      </Grid>
      )
  }
}

export default StartPage
