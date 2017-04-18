import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { connect } from 'react-redux'

/* CONTAINERS */
import store from './store'
import ExampleApp from './components/ExampleApp'
import Jokes from './components/Jokes'
import NotFound from './components/NotFound'

import ProductCatalog from './product_catalog/containers'

/* Dispatchers */
import { getProducts, getCategories, getCategoryProducts } from './product_catalog/action-creators'

/* ROUTES COMPONENT */
const RoutesComponent = (props) => (
  <Router history={browserHistory}>
    <Route path="/" component={ExampleApp} onEnter={props.loadCategories}>
      <IndexRedirect to="/jokes" />
      <Route path="/jokes" component={Jokes} />
      <Route path="/products" component={ProductCatalog} onEnter={props.getAllProducts} />
      <Route path="/products/:category" component={ProductCatalog} onEnter={(nextProps) => {
        props.getCategoryProducts(nextProps.params.category)
      }} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
)

/* ROUTES CONTAINER */
const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  loadCategories: () => dispatch(getCategories()),
  getAllProducts: () => dispatch(getProducts()),
  getCategoryProducts: (categoryName) => dispatch(getCategoryProducts(categoryName))
})

const Routes = connect(mapStateToProps, mapDispatchToProps)(RoutesComponent)

export default Routes
