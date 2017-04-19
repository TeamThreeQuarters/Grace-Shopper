'use strict'

import React from 'react';
import axios from 'axios';

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
        login(user.email, user.password);
      })
      .catch(err => console.error(err));
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={createUserAndLogin}>
        <label>Email:</label>
        <input name="email" />
        <label>Password:</label>
        <input name="password" type="password" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
