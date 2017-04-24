import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { connect } from 'react-redux';

/* CONTAINERS */
import Root from './components/Root';
import Jokes from './components/Jokes';
import NotFound from './components/NotFound';

import ProductCatalog from './product_catalog/containers';
import SingleProduct from './product_catalog/containers/SingleProduct'
import Orders from './orders/containers'
import Account from './user/containers/Account';
import Login from './user/containers/Login';
import Signup from './user/containers/Signup';

/* Dispatchers */
import { getProduct, getProducts, getCategories, getCategoryProducts } from './product_catalog/action-creators'
import { getUserOrders } from './orders/action-creators'
import { setSearchQuery } from './navigation/action-creators'

/* ROUTES COMPONENT */
const RoutesComponent = (props) => (
  <Router history={browserHistory}>
    <Route path="/" component={Root} onEnter={props.loadCategories}> {/* OB/SBW: this will happen for every view state change */}
      <IndexRedirect to="/jokes" />
      <Route path="/jokes" component={Jokes} />
      {/* OB/SBW: consider squashing into one Route */}
      <Route path="/products" component={ProductCatalog} onEnter={props.getAllProducts} />
      <Route path="/products/search" component={ProductCatalog} onEnter={nextProps => {
        props.getSearchProducts(nextProps.location.query.keywords)
      }} />
      <Route path="/products/:category" component={ProductCatalog} onEnter={nextProps => {
        props.getCategoryProducts(nextProps.params.category)
      }} />
      {/* OB/SBW: missing s */}
      <Route path="/product/:productName/:productId" component={SingleProduct} onEnter={nextProps => {
        props.getSelectedProduct(nextProps.params.productId)
      }} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/account" component={Account} />
      <Route path="/orders" component={Orders} onEnter={props.getOrders} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

/* ROUTES CONTAINER */
const mapStateToProps = () => ({})

// OB/SBW: can use abbreviated "object" syntax for mapDispatch if you want
const mapDispatchToProps = dispatch => ({
  loadCategories: () => dispatch(getCategories()),
  getSelectedProduct: productId => dispatch(getProduct(productId)),
  getAllProducts: () => dispatch(getProducts()),
  getCategoryProducts: categoryName => dispatch(getCategoryProducts(categoryName)),
  getSearchProducts: searchQuery => dispatch(setSearchQuery(searchQuery)),
  getOrders: () => dispatch(getUserOrders())
})

const Routes = connect(mapStateToProps, mapDispatchToProps)(RoutesComponent);

export default Routes;
