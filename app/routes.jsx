import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { connect } from 'react-redux';

/* CONTAINERS */
import Root from './components/Root';
import NotFound from './components/NotFound';

import ProductCatalog from './product_catalog/containers';
import ProductDetail from './product_catalog/containers/ProductDetail'
import Account from './user/containers/Account';
import Login from './user/containers/Login';
import Signup from './user/containers/Signup';
import ShoppingCartContainer from './shopping_cart/containers/ShoppingCartContainer'
import Orders from './orders/containers'

/* Dispatchers */
import { getProduct, getProducts, getCategoryProducts } from './product_catalog/action-creators'
import { getUserOrders } from './orders/action-creators'
import { setSearchQuery } from './navigation/action-creators'

/* ROUTES COMPONENT */
const RoutesComponent = (props) => (
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRedirect to="/products" />
      <Route path="/products" component={ProductCatalog} onEnter={props.getAllProducts} />
      <Route path="/products/search" component={ProductCatalog} onEnter={nextProps => {
        props.getSearchProducts(nextProps.location.query.keywords)
      }} />
      <Route path="/products/:category" component={ProductCatalog} onEnter={nextProps => {
        props.getCategoryProducts(nextProps.params.category)
      }} />
      <Route path="/product/:productName/:productId" component={ProductDetail} onEnter={nextProps => {
        props.getSelectedProduct(nextProps.params.productId)
      }} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/account" component={Account} />
      <Route path="/cart" component={ShoppingCartContainer} />
      <Route path="/orders" component={Orders} onEnter={props.getOrders} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

/* ROUTES CONTAINER */
const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  getSelectedProduct: productId => dispatch(getProduct(productId)),
  getAllProducts: () => dispatch(getProducts()),
  getCategoryProducts: categoryName => dispatch(getCategoryProducts(categoryName)),
  getSearchProducts: searchQuery => dispatch(setSearchQuery(searchQuery)),
  getOrders: () => dispatch(getUserOrders())
})

const Routes = connect(mapStateToProps, mapDispatchToProps)(RoutesComponent);

export default Routes;
