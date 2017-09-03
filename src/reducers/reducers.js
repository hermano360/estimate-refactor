import productDetails from '../../api/productDetails'
import productKeyCodes from '../../api/productKeyCodes'

export const PageReducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return action.page
    default:
      return state
  }
}

export const EstimateReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_ESTIMATE':
      return action.page
    default:
      return state
  }
}

export const ShoppingCartReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_SHOPPING_CART':
      return action.shoppingCart
    case 'DELETE_SHOPPING_CART_ITEM':
      return state.filter((cartItem) => {
        return !(cartItem.keyCode === action.keyCode && cartItem.template === action.template)
      })
    case 'CHANGE_CART_ITEM_QUANTITY':
      return state.map((cartItem) => {
        if (cartItem.keyCode === action.keyCode && cartItem.template === action.template){
          let quantity = action.quantity
          if(action.quantity = ''){
            quantity = 0
          }
          return {
            ...cartItem,
            quantity
          }
        }
        return cartItem
      })
    case 'SELECT_TEMPLATE':

      let keyCodes = productKeyCodes[action.template]
      let templateItems = productDetails.getBatchProducts(keyCodes)
      let newItems = templateItems.filter((templateItem) => {
        let result = true;
        state.forEach((currentItem) => {
          if (currentItem.keyCode === templateItem.keyCode && currentItem.template === action.template) {
            result = false;
          }
        })
        return result
      })
      let newItemsWithProperties = newItems.map((item) => {
        return {
          ...item,
          quantity: 0,
          template: action.template
        }
      })
      let completedUnorderedShoppingCart = [
        ...state,
        ...newItemsWithProperties
      ]
      // ordering non-template, template, then user-added empty template
      return [
        ...completedUnorderedShoppingCart.filter((item) => {
          return (item.template !== action.template && item.template !== '')
        }),
        ...completedUnorderedShoppingCart.filter((item) => {
          return (item.template === action.template)
        }),
        ...completedUnorderedShoppingCart.filter((item) => {
          return (item.template === '')
        })
      ]
    default:
      return state
  }
}

export const CustomerReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_CUSTOMER_INFO':
      return {
        ...state,
        [action.attribute] : action.value
      }
    case 'RESET_CUSTOMER_INFO':
      return {
        salesman: '',
        customerFirstName: '',
        customerLastName: '',
        email: '',
        // quoteNumber: 0,
        projectDescription: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        specification: '',
        phone: '',
        fax: '',
        // date: todaysDate()
      }
    default:
      return state
  }
}
