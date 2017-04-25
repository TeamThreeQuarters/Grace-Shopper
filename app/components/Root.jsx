'use strict'

import React from 'react'
import { connect } from 'react-redux'

import Navbar from 'APP/app/navigation/containers'
import Footer from 'APP/app/navigation/containers/Footer'

import { getCategories } from 'APP/app/product_catalog/action-creators'
import { getShoppingCartItems } from 'APP/app/shopping_cart/action-creators'

const Root = ({ user, children }) => (
  <div>
    <Navbar user={user} />
    {children}
    <hr />
    <Footer />
  </div>
)

class RootContainer extends React.Component {
  componentDidMount() {
    const { getCategories, getShoppingCartItems } = this.props
    getCategories()
    getShoppingCartItems()
  }

  render() {
    return (
      <Root {...this.props}/>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth
})

const mapDispatchToProps = {
  getCategories,
  getShoppingCartItems
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
