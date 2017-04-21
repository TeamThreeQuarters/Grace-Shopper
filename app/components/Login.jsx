import React from 'react';
import { Link, browserHistory } from 'react-router';

export const Login = props => {
  const login = event => {
    event.preventDefault()
    props.login(event.target.username.value, event.target.password.value)
    if (browserHistory) browserHistory.push('/products')
  }

  return (
    <div className="container">
      <form onSubmit={login} className="login-container">
        <h2>Login</h2>
        <label className="login-item">Email: </label>
        <input className="login-item" name="username" />
        <label className="login-item">Password: </label>
        <input className="login-item" name="password" type="password" />
        <input className="login-item" type="submit" value="Submit" />
        <button className="signup"><Link to="/signup">Sign Up</Link></button>
      </form>
    </div>
  )
}

import { login } from 'APP/app/reducers/auth'
import { connect } from 'react-redux'

export default connect(
  () => ({}),
  { login },
)(Login)
