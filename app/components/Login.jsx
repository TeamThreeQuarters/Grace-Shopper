import React from 'react'

export const Login = ({ login }) => (
  <div>
    <h2>Login</h2>
    <form onSubmit={evt => {
      evt.preventDefault()
      login(evt.target.username.value, evt.target.password.value)
    }}>
      <label>Email: </label>
      <input name="username" />
      <label>Password: </label>
      <input name="password" type="password" />
      <input type="submit" value="Submit" />
    </form>
  </div>
)

import { login } from 'APP/app/reducers/auth'
import { connect } from 'react-redux'

export default connect(
  () => ({}),
  { login },
)(Login)
