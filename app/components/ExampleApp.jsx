'use strict'

import React from 'react'
import { connect } from 'react-redux'

// OB/SBW: more undead code, put it to rest
// import Login from './Login'
// import WhoAmI from './WhoAmI'

import Navbar from './Navbar'

const ExampleApp = ({ user, children }) => (
  <div>
    <Navbar user={user} />
    {/* <nav>
      {user ? <WhoAmI /> : <Login />}
    </nav> */}
    {children}
  </div>
)

const mapStateToProps = state => ({
  user: state.auth
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ExampleApp)
