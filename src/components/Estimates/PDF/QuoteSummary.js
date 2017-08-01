import React, {Component} from 'react'



class QuoteSummary extends Component {

   constructor(){
    super()
    this.state = {
    }
    this.handleNewEstimate=this.handleNewEstimate.bind(this)
  }
  handleNewEstimate(){
  	this.props.newEstimate()
  }


  render(){
    return (
      <div>
         <div style={{borderBottom:'2px solid black',float: 'left','marginLeft':'5%','fontSize':'15px','textAlign':'center','width':'90%','minHeight':'30px'}}>
           This is a quotation based on Customer Specifications and by itself is not a contract to do work. Pro-Builders Express
           cannot be responsible for changes in Work or Price due to County, State, or Federal Building Requirements that were not
           Specified nor Based on Approved Plans.
         </div>
         <div style={{float: 'left','marginLeft':'5%','fontSize':'10px','textAlign':'center','width':'90%','minHeight':'30px', 'marginTop': '30px','fontSize':'15px'}}>Grand Total With Tax: $132,442.50</div>
         <div>
           <div style={{borderTop: '1px solid black', width:'25%',marginLeft:'5%',float:'left', marginTop:'50px','fontSize':'10px'}}>Customer Signature</div>
           <div style={{borderTop: '1px solid black', width:'10%',marginLeft:'5%',float:'left', marginTop:'50px','fontSize':'10px'}}>Date</div>
           <div style={{borderTop: '1px solid black', width:'25%',marginLeft:'5%',float:'left', marginTop:'50px','fontSize':'10px'}}>Pro-Builders Express Signature</div>
           <div style={{borderTop: '1px solid black', width:'10%',marginLeft:'5%',float:'left', marginTop:'50px','fontSize':'10px'}}>Date</div>
         </div>
         <div style={{float: 'left','marginLeft':'5%','fontSize':'10px','textAlign':'center','width':'90%', marginTop:'10px'}}>
           MUST BE SIGNED AND DATED ALONG WITH CONTRACT TO BECOME VALID.
         </div>
       </div>
      )
  }
}

export default QuoteSummary
