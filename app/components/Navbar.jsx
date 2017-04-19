import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { getProducts } from '../product_catalog/action-creators'
import {logout} from 'APP/app/reducers/auth'

const Navbar = props => {
  const products = props.products
  const categories = [...new Set(products.map(product => product.category))]
  const getProducts = event => props.getProducts(event)
  const user = props.user;
  const logout = props.logout;

  return (
    <div className="navbar navbar-default">
      <div className="container-fluid">

        {/*Brand and toggle get grouped for better mobile display*/}
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar-collapse-target"
            aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link to="/" className="navbar-brand">Grace Shopper</Link>
        </div>

        {/*Collect the nav links, forms, and other content for toggling*/}
        <div className="collapse navbar-collapse" id="navbar-collapse-target">

          <ul className="nav navbar-nav">
            {/*<li className="active"><Link to="#">Link <span className="sr-only">(current)</span></Link></li>*/}
            <li><Link to="#">Browse History</Link></li>
            <li className="dropdown">
              <Link
                to="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false">
                Category <span className="caret" />
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="/products">All Products</Link></li>
                <li role="separator" className="divider" />
                {categories.map(category => (
                  <li key={category}>
                    <Link to="#">
                      {category}
                    </Link>
                  </li>
                ))}
                <li role="separator" className="divider" />
                <li><Link to="#">Different stuff</Link></li>
                <li role="separator" className="divider" />
                <li><Link to="#">Stuff stuff</Link></li>
              </ul>
            </li>
          </ul>

          {/*Account Related Links*/}
          <ul className="nav navbar-nav navbar-right">
            {user ? 
              <li className="dropdown">
                <Link
                  to="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Account <span className="caret" />
                </Link>
                <ul className="dropdown-menu">
                  <li><Link to="/account">Your Account</Link></li>
                  <li><Link to="#">Your Orders</Link></li>
                  <li><Link to="#">Your Wishlist</Link></li>
                  <li role="separator" className="divider" />
                  <li><button onClick={logout}>Sign Out</button></li>
                </ul>
              </li> :
              <li><Link to="/login">Login</Link></li>
            }
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="#">Orders</Link></li>
            <li><Link to="#">Cart</Link></li>
          </ul>

          {/*Search Bar*/}
          <form className="navbar-form navbar-left" role="search" onSubmit={getProducts}>
            <div className="form-group">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" name="search" />
                <span className="input-group-btn"><button type="submit" className="btn"><span className="glyphicon glyphicon-search" /></button></span>
              </div>
            </div>
          </form>

          {/* User greeting if they are logged in */}
          {user && <p>Hello {user.email}!</p>} 

        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.products.products
})

const mapDispatchToProps = dispatch => ({
  getProducts: event => {
    event.preventDefault()
    dispatch(getProducts({
      name: event.target.search.value
    }))
  },
  logout: () => dispatch(logout())
})

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarContainer
