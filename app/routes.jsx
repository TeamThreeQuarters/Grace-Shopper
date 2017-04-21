import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { connect } from 'react-redux';

/* CONTAINERS */
import Root from './components/Root';
import Jokes from './components/Jokes';
import NotFound from './components/NotFound';

import ProductCatalog from './product_catalog/containers';
import SingleProduct from './product_catalog/containers/SingleProduct'
import Account from './user/containers/Account';
import Login from './user/containers/Login';
// import Login from 'APP/app/components/Login'
import Signup from './user/containers/Signup';

/* Dispatchers */
import { getProduct, getProducts, getCategories, getCategoryProducts } from './product_catalog/action-creators'
import { setSearchQuery } from './navigation/action-creators'

/* ROUTES COMPONENT */
const RoutesComponent = (props) => (
  <Router history={browserHistory}>
    <Route path="/" component={Root} onEnter={props.loadCategories}>
      <IndexRedirect to="/jokes" />
      <Route path="/jokes" component={Jokes} />
      <Route path="/products" component={ProductCatalog} onEnter={props.getAllProducts} />
      <Route path="/products/search" component={ProductCatalog} onEnter={nextProps => {
        props.getSearchProducts(nextProps.location.query.keywords)
      }} />
      <Route path="/products/:category" component={ProductCatalog} onEnter={nextProps => {
        props.getCategoryProducts(nextProps.params.category)
      }} />
      <Route path="/product/:productName/:productId" component={SingleProduct} onEnter={nextProps => {
        props.getSelectedProduct(nextProps.params.productId)
      }} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/account" component={Account} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

/* ROUTES CONTAINER */
const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  loadCategories: () => dispatch(getCategories()),
  getSelectedProduct: productId => dispatch(getProduct(productId)),
  getAllProducts: () => dispatch(getProducts()),
  getCategoryProducts: categoryName => dispatch(getCategoryProducts(categoryName)),
  getSearchProducts: searchQuery => dispatch(setSearchQuery(searchQuery))
})

const Routes = connect(mapStateToProps, mapDispatchToProps)(RoutesComponent);

export default Routes;
