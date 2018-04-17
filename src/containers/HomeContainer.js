import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'
import Home from '../components/Home'

const HomeContainer = props => <Home {...props} />

export default connect(null, { login })(HomeContainer)
