import React, {Component} from 'react'
import {Row,Input,Icon,Col,Table,Autocomplete,Button} from 'react-materialize'

// import TableElement from './TableElement'
import ProductAccess from '../../../api/ProductAccess'
import testProductAccess from '../../../api/testProductAccess'
import templateConfig from '../../../api/templateConfig'

class NewEstimateRev extends Component {
	constructor(){
		super()
		this.state = {
			templateValue:'Choose a Template',
			salesmanValue:'empty',
			shoppingCart:[],
			shoppingCartTemplates:[],
			subtotalMaterial:0,
			taxMaterial:0,
			totalMaterial:0,
			totalLabor:0,
			grandTotal:0,
			tax:0.10,
			shoppingCartIndividuals:[],
			itemTotals:[]
		}
		this.handleOnAutocomplete	=	this.handleOnAutocomplete.bind(this);
		this.handleTemplateChange	=	this.handleTemplateChange.bind(this);
		this.handleSalesmanChange	=	this.handleSalesmanChange.bind(this);
		this.handleItemDelete		=	this.handleItemDelete.bind(this);
		this.handleChangeTotal		=	this.handleChangeTotal.bind(this);
		this.handleAddIndividualItem=	this.handleAddIndividualItem.bind(this);
		this.clickEstimate=	this.clickEstimate.bind(this);
	}

	addTemplateToProducts(products,template){
		return products.map((product)=>{
			product.template = template;
			return product
		})
	}

	addTemplateToState(templateCollection, template){
		let templateCollectionCopy = templateCollection.filter(() => true);
		let templateIndex = templateCollectionCopy.indexOf(template);
		if(templateIndex === -1){
			templateCollectionCopy.push(template)
		} else {
			templateCollectionCopy.splice(templateIndex,1);
			templateCollectionCopy.push(template);
			// reorder templateCollection
		}
		return templateCollectionCopy
	}
	clickEstimate(){
		let scopeText = this.refs.scopeOfWorkText.state.value;
		let description = this.refs.description.state.value;
		let {shoppingCart,shoppingCartIndividuals,itemTotals, grandTotal, salesmanValue, taxMaterial, totalLabor, subtotalMaterial, totalMaterial} = this.state;
		this.props.generateEstimate(scopeText,shoppingCart,shoppingCartIndividuals,itemTotals,description, grandTotal, salesmanValue, taxMaterial, totalLabor, subtotalMaterial, totalMaterial)
	}

	handleAddIndividualItem(productName){
		let {shoppingCartIndividuals} = this.state;
		let addItem = true;
		shoppingCartIndividuals.forEach((item)=>{
			if(item.name === productName){
				addItem = false;
			}
		})
		if(addItem){
				let shoppingCartNew = this.addTemplateToProducts([testProductAccess.getProductWithName(productName)],"");
					this.setState({
						shoppingCartIndividuals:[
						...shoppingCartIndividuals,
						...shoppingCartNew
						]
					})}
	}

	handleChangeTotal(subtotalMaterial,totalLabor,itemTotals){
		let {tax} = this.state;
		let taxMaterial = tax * subtotalMaterial,
		totalMaterial = taxMaterial + subtotalMaterial,
		grandTotal = totalLabor + totalMaterial;


		this.setState({
			subtotalMaterial,
			taxMaterial,
			totalLabor,
			totalMaterial,
			grandTotal,
			itemTotals
		})
	}

	handleGenerateEstimate(){
		console.log("generate new estimate")
	}

	handleItemDelete(productIdentifier,typeOfCart){
		let currentCart;
		if(typeOfCart==='individual'){
			currentCart = this.state.shoppingCartIndividuals;
		} else {
			currentCart = this.state.shoppingCart;
		}
		const currentShoppingCartTemplate = this.state.shoppingCartTemplates;
		const updatedCart = currentCart.filter((product)=>{
			return product.modelNo === productIdentifier ? false : true
		})
		const updatedShoppingCartTemplates = currentShoppingCartTemplate.filter((template)=>{
			let keepTemplate = false;
			updatedCart.forEach((cartItem)=>{
				if(cartItem.template === template){
					keepTemplate = true;
				}
			})
			return keepTemplate
		});

		if(typeOfCart==='individual'){
			this.setState({
				shoppingCartIndividuals:updatedCart
			})
		} else {
			this.setState({
				shoppingCartTemplates: updatedShoppingCartTemplates,
				shoppingCart:updatedCart
			})
		}
	}

	handleOnAutocomplete(val){
		console.log(val,"hello")
	}

	handleSalesmanChange(){
		let salesman = event.target.innerHTML;
		this.props.onChangeSalesman(salesman)
	}

	handleTemplateChange(){
		const templateValue = event.target.innerHTML;

		if(templateValue !== "Choose a Template"){
			const templateModelNos = templateConfig[templateValue];
			let {shoppingCartTemplates,shoppingCart} = this.state;
				let filteredModelNos = this.whichItemsToAddToShoppingCart(shoppingCart, templateModelNos, templateValue);
				let itemsToAddToShoppingCart = testProductAccess.getModelNos(filteredModelNos);
				let itemsWithTemplate = this.addTemplateToProducts(itemsToAddToShoppingCart,templateValue);
				let shoppingCartUnordered = [...shoppingCart,...itemsWithTemplate];
				shoppingCart = this.reorderShoppingCart(shoppingCartUnordered, templateValue);
				shoppingCartTemplates = this.addTemplateToState(shoppingCartTemplates, templateValue)
				this.setState({
					shoppingCart,
					shoppingCartTemplates
				})
		}
	}

	reorderShoppingCart(shoppingCart, templateValue){
		let orderedShoppingCart = shoppingCart.filter(()=>true);
		let ordered = true;
		do {
			let ordered = true;
			for(let i = orderedShoppingCart.length-1; i >= 0; i--){
				if(i === orderedShoppingCart.length-1){
					if(orderedShoppingCart[i].template===templateValue){
						console.log("first value in correct spot")
					} else {
						console.log("first value not in correct spot");

						let firstTemplateIndex;
						orderedShoppingCart.forEach((cartItem,index)=>{
							if(firstTemplateIndex=== undefined){
								firstTemplateIndex = index;
							}
						})
						let firstTemplateItem = orderedShoppingCart[firstTemplateIndex];
						orderedShoppingCart.splice(firstTemplateIndex,1);
						orderedShoppingCart.push(firstTemplateItem);
						ordered = false;
						i = orderedShoppingCart.length
					}
				} else {
					if(orderedShoppingCart[i].template === templateValue){
						if(orderedShoppingCart[i+1].template === templateValue){
							console.log("current template item is in order")
						} else {
							console.log("current template item is not in order")
							let transposedCartItem = orderedShoppingCart[i];
							orderedShoppingCart.splice(i,1);
							orderedShoppingCart.push(transposedCartItem);
							ordered = false;
							i = orderedShoppingCart.length
						}
					} else {
						console.log("item is not in current template")
					}
				}
			}
		} while(ordered === false)

		return orderedShoppingCart
	}

	resetTemplateValue(){
		// this.refs.templateSelection.state.value = 'Choose a Template';
	}

	whichItemsToAddToShoppingCart(shoppingCart, modelNos, template){

		let filteredModelNos = modelNos.filter((modelNo)=>{
			let acceptableModelNo = true;
			shoppingCart.forEach((cartItem)=>{
				if(cartItem.modelNo === modelNo && cartItem.template === template){
					acceptableModelNo = false;
				}
			})
			return acceptableModelNo
		})

		return filteredModelNos
	}



componentDidMount(){

}

render() {
	const {grandTotal, subtotalMaterial, totalLabor, totalMaterial, taxMaterial} = this.state;

	return (
		<div>
		<Row>
			<Input s={6} label="Salesman" type='select' defaultValue={this.state.salesmanValue} validate onChange={this.handleSalesmanChange}>
				<option value='empty'></option>
				<option value='1'>Robert Leon</option>
				<option value='2'>Steve Smith</option>
				<option value='3'>Antonio Vargas</option>
			</Input>
			<Input s={12} ref="description" label="Project Description"/>
			<Input ref="scopeOfWorkText" label="Scope" s={12} />
			<Input s={12} ref="templateSelection" type='select' label="Template" defaultValue={this.state.templateValue} onChange={this.handleTemplateChange}>
				<option value='Choose a Template'>Choose a Template</option>
				<option value='Bath1'>Bath1</option>
				<option value='Kitchen1'>Kitchen1</option>
				<option value='Livingroom1'>Livingroom1</option>
			</Input>
		</Row>
		<Row>
			{/* <TableElement shoppingCart={this.state.shoppingCart} shoppingCartIndividuals = {this.state.shoppingCartIndividuals} onItemDelete={this.handleItemDelete} onChangeTotal={this.handleChangeTotal} addIndividualItem={this.handleAddIndividualItem}/> */}
		</Row>

		<Row>
			<Col s={4} offset="s7">
				<Table >
					<thead>
						<tr>
							<th data-field=" "></th>
							<th data-field="Material">Materials</th>
							<th data-field="Labor">Labor</th>
							<th data-field="Days">Days</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>Subtotal</td>
							<td>${subtotalMaterial.toFixed(2)}</td>
							<td>${totalLabor.toFixed(2)}</td>
							<td>3.1365</td>
						</tr>
						<tr>
							<td>Tax</td>
							<td>${taxMaterial.toFixed(2)}</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Total</td>
							<td>${totalMaterial.toFixed(2)}</td>
							<td>${totalLabor.toFixed(2)}</td>
							<td></td>
						</tr>
						<tr>
							<td>Grand Total</td>
							<td>${grandTotal.toFixed(2)}</td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</Table>
				<Button onClick={this.clickEstimate}>Generate Estimate</Button>
			</Col>
		</Row>

		</div>
		)
}
}

export default NewEstimateRev
