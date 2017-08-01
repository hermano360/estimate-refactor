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
    }
  }
  componentDidMount(){
  	let html = $('#printThisBitch')[0].outerHTML;

  	console.log(html)
  	var requestUrl = `/pdfTest`;
	  axios({
	    method: 'post',
	    url: requestUrl,
	      data: {
	        html
	      }
	    }).then(function(res){
	          console.log('successful')
	        }).catch(function (error) {
	          console.log('not successful')
	    		console.log(error);
	  		})
  }


  render(){
    return (
      <div>
        <div style={{display:'none'}}>
          <div id="printThisBitch">
            <CustomerInfo {...this.props}/>
            <Specifications shoppingCart={this.props.shoppingCart}/>
            <QuoteSummary/>
          </div>
        </div>
        <div>Estimate sent to hermano360@gmail.com, robertLeon@probuilders.com</div>
        <Button>Start Over?</Button>
      </div>
      )
  }
}

export default EstimatePDF
