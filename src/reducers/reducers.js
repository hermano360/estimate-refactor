
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

export const TotalCostReducer = (state = '', action) => {
  switch (action.type) {
    case 'RECALCULATE_TOTAL':
      let total = 0;
      action.shoppingCart.forEach((item) => {
        total += (item.Labor + item.Material) * item.quantity
      })
      return total

    default:
      return state
  }
}
