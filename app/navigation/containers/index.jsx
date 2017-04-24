import { connect } from 'react-redux'

import Navbar from '../components'
import { logout } from 'APP/app/user/action-creators'
import { removeSearchQuery } from '../action-creators'

const mapStateToProps = state => ({
  products: state.products.products,
  categories: state.products.categories
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  removeSearchQuery: () => dispatch(removeSearchQuery())
})

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarContainer
