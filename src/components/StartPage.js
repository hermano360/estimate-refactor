import React, {Component} from 'react'
import {Button, Row, Col, Grid, Glyphicon} from 'react-bootstrap'
var actions = require('../actions/actions')
var {connect} = require('react-redux')

class StartPage extends Component {
  render () {
    const {dispatch} = this.props
    let logoStyles = {
      width: '100%',
      height: 'auto',
      borderRadius: '5px',
      padding: '5px'
    }
    let buttonContainerStyles = {height: '200px', 'marginTop': '50px', textAlign: 'center'}
    let marginTopCustom = (margintop) => {
      return {
        marginTop: `${margintop}%`
      }
    }

    let borderBoxes = {
      height: '300px',
      maxWidth: '300px',
      minWidth: '220px',
      width: '70%',
      textAlign: 'center',
      verticalAlign: 'middle'
    }

    let menuTitle = {
      color: 'white',
      fontSize: '40px',
      margin: '40px'
    }

    let startButtons = {
      color: 'black',
      fontWeight: '800',
      fontSize: '15px',
      width: '30vw',
      backgroundColor:'#B4E41C',
      borderRadius: '15px',
      marginLeft:'5px',
      marginRight: '5px',
      marginTop:'15px'
    }

    return (
      <Grid fluid style={{textAlign: 'center'}}>
        <Row>
          <Col xs={12}>
                <div style={{float:'right'}}>
                  <div style={{textAlign:'center', color:'black', marginTop:'15px'}}>
                    <Glyphicon glyph='cog' style={{fontSize:'30px'}}/>
                    <div style={{fontSize:'15px'}}>Settings</div>
                  </div>
                </div>
            <Row>
              <div style={borderBoxes} className='center-block'>
                <div style={buttonContainerStyles}>
                  <Col xs={12} className='center-block' style={{marginBottom: '25%'}}>
                    <img src='/ezestimator_logo.png' style={logoStyles} />
                  </Col>
                  <Col xs={12} className='center-block' style={{marginTop:'10%'}}>
                    <Button onClick={() => { dispatch(actions.changePage('Estimate')) }}  style={startButtons}>Estimate</Button>
                  </Col>
                  <Button onClick={() => { dispatch(actions.changePage('Products')) }}  style={startButtons}>Products</Button>
                  <Button onClick={() => { dispatch(actions.changePage('PhoneList')) }} style={startButtons}>Phone</Button>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default connect(
  state => state
)(StartPage)
