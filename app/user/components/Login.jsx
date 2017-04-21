import React from 'react'
import { Link } from 'react-router'

const Login = props => {
  const user = props.user
  const login = event => props.login(event)

  return (
    <div className="container">
      {!user ? <form onSubmit={login} className="login-container">
        <h2>Login</h2>
        <label className="login-item">Email: </label>
        <input className="login-item" name="username" />
        <label className="login-item">Password: </label>
        <input className="login-item" name="password" type="password" />
        <input className="login-item" type="submit" value="Submit" />
        <a className="google-signin" href="api/auth/login/google">Sign In with Google</a>
        <button className="signup"><Link to="/signup">Sign Up</Link></button>
      </form>
        : <h2>You are already logged in.</h2>}
    </div>
  )
}

export default Login
