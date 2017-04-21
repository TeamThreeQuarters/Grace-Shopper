import { connect } from 'react-redux'
import { browserHistory } from 'react-router';

import Login from '../components/Login'
import { login } from 'APP/app/reducers/auth'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  login: event => {
    event.preventDefault()
    dispatch(login(event.target.username.value, event.target.password.value))
    browserHistory.push('/products')
  }
})

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginContainer
