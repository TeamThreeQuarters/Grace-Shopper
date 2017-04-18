'use strict'

import React from 'react';
import axios from 'axios';

export default ({ login }) => {

  function createUser(evt) {
    evt.preventDefault();
    let userData = {
      email: evt.target.name.value,
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
    <form onSubmit={createUser}>
      <label>Name:</label>
      <input name="name" />
      <label>Password:</label>
      <input name="password" type="password" />
      <input type="submit" value="Signup" />
    </form>
  );
};

