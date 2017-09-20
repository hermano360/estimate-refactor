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
      case 'DUPLICATE_QUOTE':
        return {
          ...state,
          [action.quoteNumber]: {
            salesman: action.quote.salesman,
            customerFirstName: action.quote.customerFirstName,
            customerLastName: action.quote.customerLastName,
            email: action.quote.email,
            projectDescription: action.quote.projectDescription,
            address: action.quote.address,
            city: action.quote.city,
            state: action.quote.state,
            zipcode: action.quote.zipcode,
            specification: action.quote.specification,
            phone: action.quote.phone,
            fax: action.quote.fax,
            shoppingCart: [...action.quote.shoppingCart],
            date: action.date,
            quoteNumber: action.quoteNumber
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
        [action.quoteNumber]: {
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
      return {
        ...state,
        [action.quoteNumber]: {
          ...state[action.quoteNumber],
          shoppingCart: shoppingCartWithAdjustedQuantity
        }
      }
      case 'CHANGE_CART_ITEM_LABOR':
        let shoppingCartWithAdjustedLabor = state[action.quoteNumber].shoppingCart.map((cartItem) => {
          if (cartItem.keyCode === action.keyCode && cartItem.template === action.template) {
            let Labor = action.newPrice
            if (action.newPrice === '') {
              Labor = 0
            }
            return {
              ...cartItem,
              Labor
            }
          }
          return cartItem
        })
        return {
          ...state,
          [action.quoteNumber]: {
            ...state[action.quoteNumber],
            shoppingCart: shoppingCartWithAdjustedLabor
          }
        }
        case 'CHANGE_CART_ITEM_MATERIAL':
          let shoppingCartWithAdjustedMaterial = state[action.quoteNumber].shoppingCart.map((cartItem) => {
            if (cartItem.keyCode === action.keyCode && cartItem.template === action.template) {
              let Material = action.newPrice
              if (action.newPrice === '') {
                Material = 0
              }
              return {
                ...cartItem,
                Material
              }
            }
            return cartItem
          })
          return {
            ...state,
            [action.quoteNumber]: {
              ...state[action.quoteNumber],
              shoppingCart: shoppingCartWithAdjustedMaterial
            }
          }
      case 'CHANGE_CART_ITEM_DESCRIPTION':
        let shoppingCartWithAdjustedDescription = state[action.quoteNumber].shoppingCart.map((cartItem) => {
          if (cartItem.keyCode === action.keyCode && cartItem.template === action.template) {
            let description = action.description
            console.log(description)
            return {
              ...cartItem,
              description
            }
          }
          return cartItem
        })
        console.log(shoppingCartWithAdjustedDescription)
        return {
          ...state,
          [action.quoteNumber]: {
            ...state[action.quoteNumber],
            shoppingCart: shoppingCartWithAdjustedDescription
          }
        }
    case 'DELETE_SHOPPING_CART_ITEM':
      const updatedShoppingCart = state[action.quoteNumber].shoppingCart.filter((cartItem) => {
        return !(cartItem.keyCode === action.keyCode && cartItem.template === action.template)
      })
      return {
        ...state,
        [action.quoteNumber]: {
          ...state[action.quoteNumber],
          shoppingCart: updatedShoppingCart
        }
      }
    case 'ADD_SHOPPING_CART_ITEM':
      let newShoppingCart = state[action.quoteNumber].shoppingCart
      let repeatedItem = false
      newShoppingCart.forEach((currentCartItem) => {
        if(currentCartItem.keyCode === action.shoppingCartItem){
          repeatedItem = true
        }
      })
      if(!repeatedItem){
        let templateItem = productDetails.getSingleProduct(action.shoppingCartItem)
        newShoppingCart.push({
          ...templateItem,
          quantity: 0,
          template: templateItem.productGroup
        })
        return {
          ...state,
          [action.quoteNumber]: {
            ...state[action.quoteNumber],
            shoppingCart: newShoppingCart
          }
        }
      } else {
        return state
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
      return [...state, ...action.availableQuoteNumbers]
    default:
      return state
  }
}

export const DOMNodesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SHOPPING_CART_NODE':
      return {...state, [action.key]: action.node}
    case 'CLEAR_SHOPPING_CART_NODE':
      return {}
    default:
      return state
  }
}
