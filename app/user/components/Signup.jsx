'use strict'

import React from 'react';

export default props => {
  const user = props.user
  const signup = event => props.signup(event)

  return (
    <div className="container">
      {!user ? <form className="login-container" onSubmit={signup}>
        <h2>Sign Up</h2>
        <label className="login-item">Email:</label>
        <input className="login-item" name="email" />
        <label className="login-item">Password:</label>
        <input className="login-item" name="password" type="password" />
        <input className="login-item" type="submit" value="Submit" />
      </form>
        : <h2>You are already logged in.</h2>}
    </div>
  );
};
