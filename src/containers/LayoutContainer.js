import React from 'react'
import { connect } from 'react-redux'

import Layout from '../components/Layout'

const LayoutContainer = props => <Layout {...props} />

const mapStateToProps = state => ({
  isPageLoading: state.common.isPageLoading,
})

export default connect(mapStateToProps)(LayoutContainer)
