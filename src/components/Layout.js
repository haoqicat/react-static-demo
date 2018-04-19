import React, { Component } from 'react'
import styled from 'styled-components'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import Logout from '../containers/LogoutContainer'
import Nav from '../containers/NavContainer'

class Layout extends Component {
  render () {
    const { isPageLoading } = this.props
    if (isPageLoading) {
      NProgress.start()
    } else {
      NProgress.done()
    }
    return (
      <Wrap>
        <Sider>
          <LogoWrap>文章管理</LogoWrap>
          <NavWrap>
            <Nav />
          </NavWrap>
          <LogoutWrap>
            <Logout />
          </LogoutWrap>
        </Sider>
        <Content>
          <Header />
          <Main>{this.props.children}</Main>
        </Content>
      </Wrap>
    )
  }
}

export default Layout

const Wrap = styled.div`
  height: 100vh;
  display: flex;
`

const Sider = styled.div`
  flex-basis: 200px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  flex-grow: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const LogoWrap = styled.div`
  height: 60px;
  background: #ececec;
  text-align: center;
  font-size: 20px;
  line-height: 60px;
`

const NavWrap = styled.div`
  flex-grow: 1;
`

const LogoutWrap = styled.div`
  height: 60px;
  background: #ececec;
`

const Header = styled.div`
  height: 60px;
  background: #212121;
  flex-shrink: 0;
`

const Main = styled.div`
  padding: 10px;
  flex-grow: 1;
  overflow: scroll;
`
