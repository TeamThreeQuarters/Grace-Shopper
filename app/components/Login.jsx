import React from 'react'

export const Login = ({ login }) => (
  <div> 
    <h2>Login</h2>
    <form onSubmit={evt => {
      console.log('Reached line 7.');
      evt.preventDefault()
      login(evt.target.username.value, evt.target.password.value)
      console.log('Reached here.');
    } }>
      <label>Email: </label>
      <input name="username" />
      <label>Password: </label>        
      <input name="password" type="password" />
      <input type="submit" value="Submit" />
    </form>
  </div>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(
  state => ({}),
  {login},
)(Login)
