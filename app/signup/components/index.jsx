'use strict'

import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

export default ({ login }) => {
  function createUserAndLogin(evt) {
    evt.preventDefault();
    const userData = {
      email: evt.target.email.value,
      password: evt.target.password.value,
    };
    axios.post('/api/users', userData)
      .then(ret => ret.data)
      .then(user => {
        login(user.email, user.password)
        if (browserHistory) {
          browserHistory.push('/products');
        }
      })
      .catch(err => console.error(err));
  }

  return (
    <div className="container">
      <form className="login-container" onSubmit={createUserAndLogin}>
        <h2>Sign Up</h2>
        <label className="login-item">Email:</label>
        <input className="login-item" name="email" />
        <label className="login-item">Password:</label>
        <input className="login-item" name="password" type="password" />
        <input className="login-item" type="submit" value="Submit" />
      </form>
    </div>
  );
};
