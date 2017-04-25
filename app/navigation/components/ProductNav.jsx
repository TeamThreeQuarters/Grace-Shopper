import React from 'react'
import { Link } from 'react-router'

const ProductNav = props => {
  const categories = props.categories
  const removeSearchQuery = props.removeSearchQuery

  return (
    <ul className="nav navbar-nav">
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
          <li><Link to="/products" onClick={removeSearchQuery}>All Products</Link></li>
          <li role="separator" className="divider" />
          {categories.map(category => (
            <li key={category}>
              <Link to={`/products/${category}`} onClick={removeSearchQuery}>
                {category}
              </Link>
            </li>
          ))}
          <li role="separator" className="divider" />
          <li><Link to="#">Nothing here yet</Link></li>
        </ul>
      </li>
    </ul>
  )
}

export default ProductNav
