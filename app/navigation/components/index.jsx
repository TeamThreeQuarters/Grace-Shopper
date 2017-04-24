import React from 'react'
import { Link } from 'react-router'

import ProductNav from '../containers/ProductNav'
import AccountNav from '../containers/AccountNav'
import Search from '../containers/Search'

const Navbar = props => {
  const categories = props.categories
  const user = props.user;
  const removeSearchQuery = props.removeSearchQuery

  const style = {
    maxWidth: 210,
    marginTop: -18
  }

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
          <Link to="/products" className="navbar-brand" onClick={removeSearchQuery} title="Fullstack  Marketplace">
            <img src="/images/navbar_logo.png" style={style}/>
          </Link>
        </div>

        {/* Collect the nav links, forms, and other content for toggling */}
        <div className="collapse navbar-collapse" id="navbar-collapse-target">

          {/* Product Related Links */}
          <ProductNav categories={categories} />

          {/* Account Related Links */}
          <AccountNav user={user} />

          {/* Search bar */}
          <Search />

        </div>
      </div>
    </div>
  )
}

export default Navbar
