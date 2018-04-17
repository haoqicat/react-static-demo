import React, { Component } from 'react'
import styled from 'styled-components'

class Logout extends Component {
  render () {
    return (
      <Wrap>
        <LogoutText>退出</LogoutText>
        <UserName>admin</UserName>
      </Wrap>
    )
  }
}

export default Logout

const Wrap = styled.div`
  height: 60px;
  line-height: 60px;
  background: #ececec;
  display: flex;
`

const LogoutText = styled.div`
  text-align: center;
  flex-basis: 50px;
  background: #ff8a00;
  color: white;
  cursor: pointer;
`

const UserName = styled.div`
  padding-left: 10px;
`
