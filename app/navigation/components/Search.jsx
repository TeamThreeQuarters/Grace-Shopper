import React from 'react'

const Search = props => {
  const getProducts = event => props.getProducts(event)
  return (
    <form className="navbar-form navbar-left" role="search" onSubmit={getProducts}>
      <div className="form-group">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search" name="search" />
          <span className="input-group-btn">
            <button type="submit" className="btn">
              <span className="glyphicon glyphicon-search" />
            </button>
          </span>
        </div>
      </div>
    </form>
  )
}

export default Search
