'use strict'

import React from 'react'
import { connect } from 'react-redux'

import Login from './Login'
import WhoAmI from './WhoAmI'

const ExampleApp = ({ user, children }) => (
  <div>
    <nav>
      {user ? <WhoAmI /> : <Login />}
    </nav>
    {children}
  </div>
)

const mapStateToProps = state => ({
  user: state.auth
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ExampleApp)
