import React, { Component } from 'react'
import styled from 'styled-components'
import { Menu, Icon } from 'antd'
import { Link } from 'react-static'

const SubMenu = Menu.SubMenu

class Nav extends Component {
  componentDidMount () {
    this.props.loadSelectedInex()
  }

  handleClick = e => {
    this.props.selectItem(e.key)
  }

  render () {
    const { selectedIndex } = this.props

    return (
      <Wrap>
        <Link to="/" />
        <Link to="/charts" />
        <Link to="/posts" />
        <Link to="/posts/new" />
        <Menu
          onClick={this.handleClick}
          style={{ borderRight: 'none' }}
          defaultOpenKeys={['stat', 'post']}
          selectedKeys={[selectedIndex]}
          mode="inline"
        >
          <SubMenu
            key="stat"
            title={
              <span>
                <Icon type="file" />
                <span>统计</span>
              </span>
            }
          >
            <Menu.Item key="/charts">图表</Menu.Item>
          </SubMenu>
          <SubMenu
            key="post"
            title={
              <span>
                <Icon type="file" />
                <span>文章</span>
              </span>
            }
          >
            <Menu.Item key="/posts">所有文章</Menu.Item>
            <Menu.Item key="/posts/new">创建</Menu.Item>
          </SubMenu>
        </Menu>
      </Wrap>
    )
  }
}

export default Nav

const Wrap = styled.div``
