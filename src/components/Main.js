import React, { Component } from 'react'
import { Router } from 'react-static'
import Routes from 'react-static-routes'
import history from '../utils/routerUtils'

class Main extends Component {
  render () {
    return (
      <Router history={history}>
        <Routes />
      </Router>
    )
  }
}

export default Main
