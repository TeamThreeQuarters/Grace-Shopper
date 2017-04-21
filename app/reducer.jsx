import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./reducers/auth').default,
  products: require('./product_catalog/reducer').default,
  navigation: require('./navigation/reducer').default,
  orders: require('./orders/reducer').default
})

export default rootReducer
