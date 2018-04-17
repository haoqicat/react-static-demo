import React, { Component } from 'react'
import styled from 'styled-components'
import { Menu, Icon } from 'antd'

const SubMenu = Menu.SubMenu

class Nav extends Component {
  render () {
    return (
      <Wrap>
        <Menu
          style={{ borderRight: 'none' }}
          defaultOpenKeys={['stat', 'post']}
          selectedKeys={['/charts']}
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
