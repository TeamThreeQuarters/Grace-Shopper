import React from 'react'

const Search = props => {
  const searchQuery = props.searchQuery
  const searchChange = event => props.searchChange(event)
  const searchSubmit = event => props.searchSubmit(event)

  return (
    <form className="navbar-form navbar-left" role="search" onSubmit={searchSubmit}>
      <div className="form-group">
        <div className="input-group">
          <input
          type="text"
          className="form-control"
          placeholder="Search"
          value={searchQuery}
          onChange={searchChange} />
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
