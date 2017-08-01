import React, {Component} from 'react'
import { Button, Row, Col, Table, Grid} from 'react-bootstrap';


class PhoneList extends Component {

   constructor(){
    super()
    this.state = {

    }
    this.backToMainPage = this.backToMainPage.bind(this);
  }
    backToMainPage(e){
      e.preventDefault();
      window.location.href='';
      this.props.backToMainPage();
    }
  render(){
    let phoneListStyle= {
      height: '90vh',
      overflow: 'scroll'
    }
    let navButtonStyle = {padding:'3px', lineHeight:'1', width:'25px'};
    const generateListing = (companyName,firstName,lastName, phoneNumber, faxNumber, email, first)=>{
      let id="";
      if(first){
        id = firstName.charAt(0).toLowerCase();
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
        <Row>
          Customer Phone List
        </Row>
        <Row>
          <Col xs={11}>
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
                  {generateListing(1,"Alfred","Jones", "765-123-1213", "765-123-1213","example@gmail.com", true)}
                  {generateListing(1,"Alfred","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Alfred","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Alfred","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Alfred","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Alfred","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Alfred","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Alfred","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Alfred","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Alfred","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Alfred","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Bob","Jones", "765-123-1213", "765-123-1213","example@gmail.com", true)}
                  {generateListing(1,"Bob","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Bob","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Bob","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Bob","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Bob","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Bob","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Bob","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Bob","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Bob","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Bob","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Carlos","Jones", "765-123-1213", "765-123-1213","example@gmail.com", true)}
                  {generateListing(1,"Carlos","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Carlos","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Carlos","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Carlos","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Carlos","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Carlos","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Carlos","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Carlos","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Carlos","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Carlos","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Dean","Jones", "765-123-1213", "765-123-1213","example@gmail.com", true)}
                  {generateListing(1,"Dean","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Dean","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Dean","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Dean","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Dean","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Dean","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Dean","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Dean","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Dean","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Francis","Jones", "765-123-1213", "765-123-1213","example@gmail.com", true)}
                  {generateListing(1,"Francis","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Francis","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Francis","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Francis","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Francis","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Francis","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Francis","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Francis","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Francis","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Francis","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Francis","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"George","Jones", "765-123-1213", "765-123-1213","example@gmail.com", true)}
                  {generateListing(1,"George","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"George","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"George","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"George","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"George","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"George","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"George","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"George","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"George","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"George","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Herminio","Jones", "765-123-1213", "765-123-1213","example@gmail.com", true)}
                  {generateListing(1,"Herminio","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Herminio","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Herminio","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Herminio","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Herminio","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Herminio","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Herminio","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Herminio","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Herminio","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}
                  {generateListing(1,"Herminio","Jones", "765-123-1213", "765-123-1213","example@gmail.com", false)}

                </tbody>
              </Table>
            </div>

          </Col>
          <Col xs={1}>
            <div style={phoneListStyle}>
              <div>
                <Button style={navButtonStyle} onClick={()=>{window.location.href='#a'}}>A</Button>
                <Button style={navButtonStyle} onClick={()=>{window.location.href='#b'}}>B</Button>
                <Button style={navButtonStyle} onClick={()=>{window.location.href='#c'}}>C</Button>
                <Button style={navButtonStyle} onClick={()=>{window.location.href='#d'}}>D</Button>
                <Button style={navButtonStyle} onClick={()=>{window.location.href='#e'}}>E</Button>
                <Button style={navButtonStyle} onClick={()=>{window.location.href='#f'}}>F</Button>
                <Button style={navButtonStyle} onClick={()=>{window.location.href='#g'}}>G</Button>
                <Button style={navButtonStyle} onClick={()=>{window.location.href='#h'}}>H</Button>
                <Button style={navButtonStyle}>I</Button>
                <Button style={navButtonStyle}>J</Button>
                <Button style={navButtonStyle}>K</Button>
                <Button style={navButtonStyle}>K</Button>
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
              </div>

            </div>

          </Col>
        </Row>
        <Row>
          <Button onClick={this.backToMainPage}>Back</Button>
        </Row>
      </Grid>

      )
  }
}

export default PhoneList
