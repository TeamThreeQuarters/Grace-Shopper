import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { connect } from 'react-redux'

/* CONTAINERS */
import store from './store'
import ExampleApp from './components/ExampleApp'
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'

import ProductCatalog from './product_catalog/containers'

/* Dispatchers */
import { getProducts, getCategories } from './product_catalog/action-creators'

/* ROUTES COMPONENT */
const RoutesComponent = ({ loadOnEnter }) => (
  <Router history={browserHistory}>
    <Route path="/" component={ExampleApp} onEnter={loadOnEnter}>
      <IndexRedirect to="/jokes" />
      <Route path="/jokes" component={Jokes} />
      <Route path="/products" component={ProductCatalog} onEnter={loadOnEnter} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
)

/* ROUTES CONTAINER */
const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  loadOnEnter: () => {
    dispatch(getProducts())
    dispatch(getCategories())
  }
})

const Routes = connect(mapStateToProps, mapDispatchToProps)(RoutesComponent)

export default Routes
