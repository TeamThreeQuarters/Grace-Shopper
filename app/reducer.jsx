import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./user/reducer').default,
  products: require('./product_catalog/reducer').default,
  navigation: require('./navigation/reducer').default
})

export default rootReducer
