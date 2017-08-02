import React, {Component} from 'react'
import { Button, Row, Col, Grid} from 'react-bootstrap';
import CustomerInfo from './PDF/CustomerInfo'
import QuoteSummary from './PDF/QuoteSummary'
import Specifications from './PDF/Specifications'
var axios = require('axios');


class EstimatePDF extends Component {

   constructor(){
    super()
    this.state = {
      emailSent:false,
      percentageLoaded:0
    }
  }
  componentDidMount(){
  	let html = $('#printThisBitch')[0].outerHTML;
  	var requestUrl = `/pdfTest`;
    let that = this;
	  axios({
	    method: 'post',
	    url: requestUrl,
	      data: {
	        html
	      }
	    }).then(function(res){
	          console.log('successful',res);
            axios({
              method:'post',
              url:`/pdfEmail`,
            data: {
              dirPath: res.data.filename,
              name: `${that.props.customerFirstName} ${that.props.customerLastName}`,
              email:that.props.email
            }})
            .then(function (response) {
              console.log(response);
              that.setState({
                emailSent:true
              })

            })
            .catch(function (error) {
              console.log(error);
            });

	        }).catch(function (error) {
	          console.log('not successful')
	    		console.log(error);
	  		})
  }


  render(){
    let that = this;
    const emailStatus =()=>{
      if(that.state.emailSent){
        return (
        <div style={{textAlign:'center', verticalAlign:'middle', marginTop:'30vh'}}>
          <h4>Estimate sent to:</h4>
          <h4> hermano360@gmail.com {that.props.email}</h4>
          <Button onClick={that.props.handleEstimateStartOver}>Start Over?</Button>
        </div>
        )
      } else {
        return (
          <Grid>
            <Row>
              <Col xs={2} xsOffset={5}>
                <div className="loader"></div>
              </Col>

              <Col xs={12}>
                <div style={{textAlign:'center', verticalAlign:'middle'}}>
                  <h4>Email Being Sent</h4>
                </div>
              </Col>
            </Row>
          </Grid>
        )
      }
    }
    return (
      <div>
        <div style={{display:'none'}}>
          <div id="printThisBitch">
            <CustomerInfo {...this.props}/>
            <Specifications shoppingCart={this.props.shoppingCart}/>
            <QuoteSummary total={this.props.total}/>
          </div>
        </div>
        {emailStatus()}
      </div>
      )
  }
}

export default EstimatePDF
