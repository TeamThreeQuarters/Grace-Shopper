'use strict'

import React from 'react';

export default props => {
  const user = props.user

  return (
    <div className="container">
      <h2>User Account Page</h2>
      {user && <span>Hi {user.email}</span>}
    </div>
  );
};
