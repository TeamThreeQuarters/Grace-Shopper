import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import Search from '../components/Search'
import { setSearchQuery } from 'APP/app/navigation/action-creators'

const SearchLocalContainer = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: props.searchQuery
    }
    this.searchChange = this.searchChange.bind(this)
    this.searchSubmit = this.searchSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ searchQuery: nextProps.searchQuery })
  }

  searchChange(event) {
    this.setState({ searchQuery: event.target.value })
  }

  searchSubmit(event) {
    event.preventDefault()
    browserHistory.push(`/products/search?keywords=${this.state.searchQuery}`)
    this.props.setSearchQuery(this.state.searchQuery)
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

const mapStateToProps = state => ({
  searchQuery: state.navigation.searchQuery
})

const mapDispatchToProps = dispatch => ({
  setSearchQuery: searchQuery => dispatch(setSearchQuery(searchQuery))
})

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchLocalContainer)

export default SearchContainer
