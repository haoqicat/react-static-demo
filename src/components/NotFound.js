import React, { Component } from 'react'
import styled from 'styled-components'

class NotFound extends Component {
  render () {
    return (
      <Wrap>
        <h1>404 啦</h1>
      </Wrap>
    )
  }
}

export default NotFound

const Wrap = styled.div`
  padding: 30px;
  h1 {
    text-align: center;
  }
`
