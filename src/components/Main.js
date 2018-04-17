import React, { Component } from 'react'
import styled from 'styled-components'
import Home from './Home'

class Main extends Component {
  render () {
    return (
      <Wrap>
        <Home />
      </Wrap>
    )
  }
}

export default Main

const Wrap = styled.div``
