import productDetails from '../../api/productDetails'
import productKeyCodes from '../../api/productKeyCodes'
import quoteDatabase from '../../api/quoteDatabase'

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
    default:
      return state
  }
}

export const CustomerReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_CUSTOMER_INFO':
      return {
        ...state,
        [action.attribute]: action.value
      }
    case 'RESET_CUSTOMER_INFO':
      return {
        ...state,
        salesman: '',
        customerFirstName: '',
        customerLastName: '',
        email: '',
        projectDescription: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        specification: '',
        phone: '',
        fax: '',
        shoppingCart: []
      }
    default:
      return state
  }
}

export const CachedQuotesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EMPTY_QUOTE':
      return {
        ...state,
        [action.quoteNumber]: {
          salesman: '',
          customerFirstName: '',
          customerLastName: '',
          email: '',
          projectDescription: '',
          address: '',
          city: '',
          state: '',
          zipcode: '',
          specification: '',
          phone: '',
          fax: '',
          shoppingCart: [],
          date: action.date,
          quoteNumber: action.quoteNumber
        }
      }
    case 'ADD_QUOTE_TO_CACHE':
      return {
        ...state,
        [action.quote.quoteNumber]: {
          ...action.quote
        }
      }
    case 'UPDATE_QUOTE_INFO':
      return {
        ...state,
        [action.quoteNumber]: {
          ...state[action.quoteNumber],
          [action.attribute]: action.value
        }
      }
    case 'SELECT_TEMPLATE':
      let keyCodes = productKeyCodes[action.template]
      let templateItems = productDetails.getBatchProducts(keyCodes)
      console.log(templateItems)
      let newItems = templateItems.filter((templateItem) => {
        let result = true
        state[action.quoteNumber].shoppingCart.forEach((currentItem) => {
          if (currentItem.keyCode === templateItem.keyCode && currentItem.template === action.template) {
            result = false
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
        ...state[action.quoteNumber].shoppingCart,
        ...newItemsWithProperties
      ]
      // ordering non-template, template, then user-added empty template
      return {
        ...state,
        [action.quoteNumber]:{
          ...state[action.quoteNumber],
          shoppingCart: [
        ...completedUnorderedShoppingCart.filter((item) => {
          return (item.template !== action.template && item.template !== '')
        }),
        ...completedUnorderedShoppingCart.filter((item) => {
          return (item.template === action.template)
        }),
        ...completedUnorderedShoppingCart.filter((item) => {
          return (item.template === '')
        })
      ]}
    }
    case 'CHANGE_CART_ITEM_QUANTITY':
      let shoppingCartWithAdjustedQuantity = state[action.quoteNumber].shoppingCart.map((cartItem) => {
       if (cartItem.keyCode === action.keyCode && cartItem.template === action.template) {
         let quantity = action.quantity
         if (action.quantity === '') {
           quantity = 0
         }
         return {
           ...cartItem,
           quantity
         }
       }
       return cartItem
     })
     console.log(shoppingCartWithAdjustedQuantity)

      return {
        ...state,
        [action.quoteNumber]:{
          ...state[action.quoteNumber],
          shoppingCart: shoppingCartWithAdjustedQuantity
        }
      }
    default:
      return state
  }
}

export const QuoteNumberReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_QUOTE':
      return action.quoteNumber
    default:
      return state
  }
}
export const InitialQuoteNumberReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_INITIAL_QUOTE':
      return action.quoteNumber
    default:
      return state
  }
}

export const AvailableQuoteNumbersReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_AVAILABLE_QUOTE_NUMBERS':
      return action.availableQuoteNumbers
    default:
      return state
  }
}
