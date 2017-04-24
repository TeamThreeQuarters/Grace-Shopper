import { combineReducers } from 'redux'

// OB/SBW: consider using import instead of require
const rootReducer = combineReducers({
  navigation: require('./navigation/reducer').default,
  auth: require('./user/reducer').default,
  products: require('./product_catalog/reducer').default,
  shoppingCart: require('./shopping_cart/reducer').default,
  orders: require('./orders/reducer').default
})

export default rootReducer
