import React, {Component} from 'react'
import { Button, Row, Col, Grid, FormControl, ControlLabel, FormGroup, Form, Image, Clearfix, Table} from 'react-bootstrap';
import CustomerInfo from './PDF/CustomerInfo'
// import EstimateHeader from './PDF/EstimateHeader'
import QuoteSummary from './PDF/QuoteSummary'
// import ScopeOfWork from './PDF/ScopeOfWork'
import Specifications from './PDF/Specifications'
var axios = require('axios');


class EstimatePDF extends Component {

   constructor(){
    super()
    this.state = {
      emailSent:false
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
              name: `${that.props.customerFirstName} ${that.props.customerLastName}`
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
          <div>
          <div>Estimate sent to hermano360@gmail.com, robertLeon@probuilders.com</div>
          <Button onClick={that.props.handleEstimateStartOver}>Start Over?</Button>
        </div>
        )
      } else {
        return (
          <div>Email sending in progress</div>
        )
      }
    }
    return (
      <div>
        <div style={{display:'none'}}>
          <div id="printThisBitch">
            <CustomerInfo {...this.props}/>
            <Specifications shoppingCart={this.props.shoppingCart}/>
            <QuoteSummary/>
          </div>
        </div>
        {emailStatus()}
      </div>
      )
  }
}

export default EstimatePDF
