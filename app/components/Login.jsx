import React from 'react';
import { browserHistory } from 'react-router';

export const Login = ({ login, history }) => (
  <div>
    <h2>Login</h2>
    <form onSubmit={evt => {
      evt.preventDefault()
      login(evt.target.username.value, evt.target.password.value)
      if (browserHistory) {
        browserHistory.push('/products');
      }
    }}>
      <label>Email: </label>
      <input name="username" />
      <label>Password: </label>
      <input name="password" type="password" />
      <input type="submit" value="Submit" />
      <a href="api/auth/login/google">Sign In with Google</a>
    </form>
  </div>
)

import { login } from 'APP/app/reducers/auth'
import { connect } from 'react-redux'

export default connect(
  state => ({}),
  { login },
)(Login)
