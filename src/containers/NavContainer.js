import React from 'react'
import { connect } from 'react-redux'
import { selectItem, loadSelectedInex } from '../actions'
import Nav from '../components/Nav'

const NavContainer = props => <Nav {...props} />

const mapStateToProps = state => ({
  selectedIndex: state.common.selectedIndex,
})

export default connect(mapStateToProps, { selectItem, loadSelectedInex })(NavContainer)
