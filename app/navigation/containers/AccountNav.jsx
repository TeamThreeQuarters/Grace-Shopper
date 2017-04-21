import { connect } from 'react-redux'

import AccountNav from '../components/AccountNav'
import { logout } from 'APP/app/user/action-creators'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

const AccountNavContainer = connect(mapStateToProps, mapDispatchToProps)(AccountNav)

export default AccountNavContainer
