'use strict'

import React from 'react'
import { connect } from 'react-redux'

import Navbar from 'APP/app/navigation/containers'
import Footer from 'APP/app/navigation/containers/Footer'

const Root = ({ user, children }) => (
  <div>
    <Navbar user={user} />
    {children}
    <hr />
    <Footer />
  </div>
)

const mapStateToProps = state => ({
  user: state.auth
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Root)
