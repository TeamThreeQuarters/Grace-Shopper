'use strict'

import React from 'react'
import { connect } from 'react-redux'

import Navbar from './Navbar'

const ExampleApp = ({ user, children }) => (
  <div>
    <Navbar user={user} />
    {children}
  </div>
)

const mapStateToProps = state => ({
  user: state.auth
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ExampleApp)
