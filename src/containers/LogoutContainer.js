import React from 'react'
import { connect } from 'react-redux'
import Logout from '../components/Logout'
import { logout } from '../actions'

const LogoutContainer = props => <Logout {...props} />

const mapStateToProps = state => ({
  isAuthenticated: state.common.isAuthenticated,
})

export default connect(mapStateToProps, {
  logout,
})(LogoutContainer)
