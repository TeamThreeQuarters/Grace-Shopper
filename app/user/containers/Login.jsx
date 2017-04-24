import { connect } from 'react-redux'

import Login from '../components/Login'
import { login } from '../action-creators'

const mapStateToProps = state => ({
  user: state.auth
})

const mapDispatchToProps = dispatch => ({
  login: event => {
    event.preventDefault()
    dispatch(login(event.target.username.value, event.target.password.value))
  }
})

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginContainer
