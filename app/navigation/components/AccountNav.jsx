import React from 'react'
import { Link } from 'react-router'

const AccountNav = props => {
  const user = props.user
  const logout = props.logout

  return (
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
      <li><Link to="/orders">Orders</Link></li>
      <li><Link to="#">Cart</Link></li>
    </ul>
  )
}

export default AccountNav
