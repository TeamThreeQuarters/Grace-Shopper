import React from 'react'
import { Link } from 'react-router'

import Search from '../containers/Search'

const Navbar = props => {
  const { categories } = props
  const user = props.user;
  const logout = props.logout;

  return (
    <div className="navbar navbar-default">
      <div className="container-fluid">

        {/* Brand and toggle get grouped for better mobile display */}
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

        {/* Collect the nav links, forms, and other content for toggling */}
        <div className="collapse navbar-collapse" id="navbar-collapse-target">

          <ul className="nav navbar-nav">
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
                    <Link to={`/products/${category}`}>
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

          {/* Account Related Links */}
          <ul className="nav navbar-nav navbar-right">

            {/* User greeting if they are logged in */}
            {user
              ? <ul className="nav navbar-nav">
                <li><Link>Hello, {user.email}!</Link></li>
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
                    <li><Link to="#" onClick={logout}>Sign Out</Link></li>
                  </ul>
                </li>
              </ul>
              : <ul className="nav navbar-nav">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
              </ul>
            }
            <li><Link to="#">Orders</Link></li>
            <li><Link to="#">Cart</Link></li>
          </ul>

          <Search />

        </div>
      </div>
    </div>
  )
}

export default Navbar
