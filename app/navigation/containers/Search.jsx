import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import Search from '../components/Search'
import { getProducts } from 'APP/app/product_catalog/action-creators'

const searchQueryString = browserHistory.getCurrentLocation().query.keywords

const SearchLocalContainer = class extends React.Component {
  constructor() {
    super()
    this.state = {
      searchQuery: searchQueryString
    }
    this.searchChange = this.searchChange.bind(this)
    this.searchSubmit = this.searchSubmit.bind(this)
  }

  searchChange(event) {
    this.setState({ searchQuery: event.target.value })
  }

  searchSubmit(event) {
    event.preventDefault()
    browserHistory.push(`/products/search?keywords=${this.state.searchQuery}`)
    this.props.getProducts({ name: this.state.searchQuery })
  }

  render() {
    return (
      <Search
        {...this.state}
        searchChange={this.searchChange}
        searchSubmit={this.searchSubmit} />
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  getProducts: searchQuery => dispatch(getProducts(searchQuery))
})

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchLocalContainer)

export default SearchContainer
