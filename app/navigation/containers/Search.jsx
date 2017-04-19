import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import Search from '../components/Search'
import { getProducts } from 'APP/app/product_catalog/action-creators'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  getProducts: event => {
    event.preventDefault()
    browserHistory.push(`/products/search?name=${event.target.search.value}`)
    dispatch(getProducts({ name: event.target.search.value }))
  }
})

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)

export default SearchContainer
