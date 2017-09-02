import React, {Component} from 'react'
import {Button, Row, Col, Table, Grid, ButtonGroup} from 'react-bootstrap'
var actions = require('../../actions/actions.js')
var {connect} = require('react-redux')

class PhoneList extends Component {
  constructor () {
    super()
  }

  render () {
    const {dispatch} = this.props
    let phoneListStyle = {
      height: '70vh',
      overflow: 'scroll'
    }
    let navButtonStyle = {padding: '5px', border: '1px black solid'}
    const generateListing = (companyName, firstName, lastName, phoneNumber, faxNumber, email, first) => {
      let id = ''
      if (first) {
        id = firstName.charAt(0).toLowerCase()
      }
      return (
        <tr id={id}>
          <td>{companyName}</td>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{phoneNumber}</td>
          <td>{faxNumber}</td>
          <td>{email}</td>
        </tr>
      )
    }
    return (
      <Grid>
        <Row style={{ textAlign: 'center', marginTop: '20px' }}>
          <Col sm={12}>
            <h4>Customer Phone List</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div style={phoneListStyle}>
              <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>Company Name</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                    <th>Fax Number</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {generateListing(1, 'Alfred', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', true)}
                  {generateListing(1, 'Alfred', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Alfred', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Alfred', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Alfred', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Alfred', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Alfred', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Alfred', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Alfred', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Alfred', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Alfred', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Bob', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', true)}
                  {generateListing(1, 'Bob', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Bob', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Bob', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Bob', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Bob', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Bob', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Bob', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Bob', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Bob', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Bob', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Carlos', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', true)}
                  {generateListing(1, 'Carlos', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Carlos', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Carlos', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Carlos', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Carlos', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Carlos', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Carlos', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Carlos', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Carlos', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Carlos', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Dean', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', true)}
                  {generateListing(1, 'Dean', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Dean', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Dean', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Dean', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Dean', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Dean', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Dean', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Dean', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Dean', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Francis', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', true)}
                  {generateListing(1, 'Francis', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Francis', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Francis', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Francis', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Francis', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Francis', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Francis', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Francis', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Francis', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Francis', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Francis', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'George', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', true)}
                  {generateListing(1, 'George', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'George', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'George', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'George', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'George', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'George', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'George', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'George', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'George', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'George', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Herminio', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', true)}
                  {generateListing(1, 'Herminio', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Herminio', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Herminio', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Herminio', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Herminio', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Herminio', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Herminio', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Herminio', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Herminio', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}
                  {generateListing(1, 'Herminio', 'Jones', '765-123-1213', '765-123-1213', 'example@gmail.com', false)}

                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} style={{ textAlign: 'center', marginTop: '20px' }}>
            <ButtonGroup>
              <Button style={navButtonStyle} onClick={() => { window.location.href = '#a' }}>A</Button>
              <Button style={navButtonStyle} onClick={() => { window.location.href = '#b' }}>B</Button>
              <Button style={navButtonStyle} onClick={() => { window.location.href = '#c' }}>C</Button>
              <Button style={navButtonStyle} onClick={() => { window.location.href = '#d' }}>D</Button>
              <Button style={navButtonStyle} onClick={() => { window.location.href = '#e' }}>E</Button>
              <Button style={navButtonStyle} onClick={() => { window.location.href = '#f' }}>F</Button>
              <Button style={navButtonStyle} onClick={() => { window.location.href = '#g' }}>G</Button>
              <Button style={navButtonStyle} onClick={() => { window.location.href = '#h' }}>H</Button>
              <Button style={navButtonStyle}>I</Button>
              <Button style={navButtonStyle}>J</Button>
              <Button style={navButtonStyle}>K</Button>
              <Button style={navButtonStyle}>L</Button>
              <Button style={navButtonStyle}>M</Button>
              <Button style={navButtonStyle}>N</Button>
              <Button style={navButtonStyle}>O</Button>
              <Button style={navButtonStyle}>P</Button>
              <Button style={navButtonStyle}>Q</Button>
              <Button style={navButtonStyle}>R</Button>
              <Button style={navButtonStyle}>S</Button>
              <Button style={navButtonStyle}>T</Button>
              <Button style={navButtonStyle}>U</Button>
              <Button style={navButtonStyle}>V</Button>
              <Button style={navButtonStyle}>W</Button>
              <Button style={navButtonStyle}>X</Button>
              <Button style={navButtonStyle}>Y</Button>
              <Button style={navButtonStyle}>Z</Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <Button onClick={() => { dispatch(actions.changePage('StartPage')) }}>Back</Button>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default connect(
  state => state
)(PhoneList)
