import { connect } from 'react-redux'
import Navbar from '../components'
import { logout } from 'APP/app/reducers/auth'

const mapStateToProps = state => ({
  products: state.products.products,
  categories: state.products.categories
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarContainer
