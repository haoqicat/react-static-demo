import React, { Component } from 'react'
import { Router } from 'react-static'
import Routes from 'react-static-routes'

class Main extends Component {
  render () {
    return (
      <Router>
        <Routes />
      </Router>
    )
  }
}

export default Main
