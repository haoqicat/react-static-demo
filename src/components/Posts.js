import React, { Component } from 'react'
import { Table, Spin } from 'antd'

import Layout from '../containers/LayoutContainer.js'
import tableColumns from '../constants/tableColumns'

class Posts extends Component {
  componentDidMount () {
    this.props.loadPosts()
  }

  render () {
    const { posts, isFetching } = this.props
    const table = <Table rowKey={record => record.id} columns={tableColumns} dataSource={posts} />

    return <Layout>{isFetching ? <Spin /> : table}</Layout>
  }
}

export default Posts
