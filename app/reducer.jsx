import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./reducers/auth').default,
  products: require('./product_catalog/reducer').default
})

export default rootReducer
