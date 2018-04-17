import React from 'react'
import Logout from '../components/Logout'
import { connect } from 'react-redux'
import { logout } from '../actions'

const LogoutContainer = props => <Logout {...props} />

export default connect(null, {
  logout,
})(LogoutContainer)
