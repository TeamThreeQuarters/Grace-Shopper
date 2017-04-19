import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { connect } from 'react-redux';

/* CONTAINERS */
import store from './store';
import ExampleApp from './components/ExampleApp';
import Jokes from './components/Jokes';
import Login from './components/Login';
import WhoAmI from './components/WhoAmI';
import NotFound from './components/NotFound';

import ProductCatalog from './product_catalog/containers';
import Signup from './signup/containers';
import Account from './user/account/containers';

/* Dispatchers */

import { getProducts } from './product_catalog/action-creators'

/* ROUTES COMPONENT */
const RoutesComponent = ({ loadProductOnEnter }) => (
  <Router history={browserHistory}>
    <Route path="/" component={ExampleApp} onEnter={loadProductOnEnter} >
      <IndexRedirect to="/products" />
      <Route path="/products" component={ProductCatalog} onEnter={loadProductOnEnter} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/account" component={Account} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

/* ROUTES CONTAINER */
const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  loadProductOnEnter: () => dispatch(getProducts())
})

const Routes = connect(mapStateToProps, mapDispatchToProps)(RoutesComponent);

export default Routes;
