import React, {Component} from 'react'



class Specifications extends Component {

   constructor(){
    super()
    this.state = {
    }
  }
  // putEmptyTemplatesAtEnd(array){
  //   let updatedArray = [
  //   ... array.filter((item)=>{
  //     if(item.template !== ""){
  //       return item
  //     }
  //   }),
  //   ... array.filter((item)=>{
  //     if(item.template === ""){
  //       return item
  //     }
  //   })
  //   ]
  //   return updatedArray
  // }
  //   removeZeroQuantityItems(array){
  //   return array.filter((item)=>{
  //     if(parseFloat(item.qty) !== 0){
  //       return item
  //     }
  //   })
  // }


  render(){


    // let {shoppingCartFinal,itemTotals, shoppingCart} = this.props;
    // let itemTotalsWithTemplates = [];
    // let itemTotalsWithoutZeros = this.removeZeroQuantityItems(itemTotals);
    //
    // let itemTotalsNumbered = itemTotalsWithoutZeros.map((item,i)=>{
    //   let newItem = item
    //   newItem["number"] = i+1
    //   return newItem
    // })
    //
    // itemTotalsNumbered.forEach((item)=>{
    //   if(itemTotalsWithTemplates.indexOf(item.template) === -1 && item.template !== ""){
    //     itemTotalsWithTemplates.push(item.template);
    //   }
    //   itemTotalsWithTemplates.push(item);
    // })
    //
    // let latestItemTotals = this.putEmptyTemplatesAtEnd(itemTotalsWithTemplates)


    const renderShoppingCartItems = () =>{
      let {shoppingCart} = this.props;
      let shoppingCartWithTemplates = [];
      let templates = [];
      shoppingCart.forEach((item)=>{
        if(templates.indexOf(item.template) === -1 && item.template !== ''){
          templates.push(item.template);
          shoppingCartWithTemplates.push(item.template);
        }
        shoppingCartWithTemplates.push(item);
      })
      if(shoppingCartWithTemplates.length > 0 ){
            return shoppingCartWithTemplates.map((item)=>{
              if(typeof item === 'string'){
                      return (<div key={item}>
                                <div style={{color:'white','width':'100%','minHeight':'10px','border':'1px white solid'}}>TestTest</div>
                                <div style={{textAlign: 'center',width:'100%','fontSize':'15px', 'fontWeight': 'bold','margin':'0 0 20px 0'}}>{item}</div>
                              </div>
                      )

              } else {
                      return (
                        <div key={`${item.keyCode}-${item.template}`}>
                         <div style={{float: 'left','fontSize':'10px','marginLeft':'5%','textAlign':'center','width':'5%','minHeight':'30px'}}></div>
                         <div style={{float: 'left','marginLeft':'10px','fontSize':'10px','textAlign':'center','width':'75%','minHeight':'30px'}}>{item.Description}</div>
                         <div style={{float: 'left','marginLeft':'10px','fontSize':'10px','textAlign':'center','width':'5%','minHeight':'30px'}}>{item.quantity} {item.UOM}</div>
                         <div style={{"borderBottom": "1px solid black", position:"relative", width:'90%',left:"5%",'minHeight':'30px'}}>
                          <div style={{"color":"white",'marginTop':'5px'}}>.</div>
                        </div>
                         <br/>
                        </div>
                      )
                    }
            })
          } else {
            debugger
            return (
                        <div style={{color:'white','width':'100%','minHeight':'100px'}}>.</div>
                      )
          }
    }

    return (
    	<div>
        <br/>
          <div style={{float: 'left','marginLeft':'5%','backgroundColor': '#13788e', color: 'white', width:'7%', 'textAlign':'center', borderBottom:'black 1px solid',borderTop:'black 1px solid',height:'15px'}}>#</div>
      		<div style={{float: 'left','backgroundColor': '#13788e', color: 'white', width:'76%', 'textAlign':'center', borderBottom:'black 1px solid',borderTop:'black 1px solid',height:'15px'}}>Specifications</div>
          <div style={{float: 'left','backgroundColor': '#13788e', color: 'white', width:'7%', 'textAlign':'center', borderBottom:'black 1px solid',borderTop:'black 1px solid',height:'15px'}}>Qty</div>

          {renderShoppingCartItems()}
      </div>
      )
  }
}

export default Specifications
