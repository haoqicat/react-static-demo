import React, { Component } from 'react'
import { Table } from 'antd'

import Layout from './Layout'
import tableColumns from '../constants/tableColumns'

class Posts extends Component {
  componentDidMount () {
    this.props.loadPosts()
  }

  render () {
    const { posts } = this.props
    const table = <Table rowKey={record => record.id} columns={tableColumns} dataSource={posts} />

    return <Layout>{table}</Layout>
  }
}

export default Posts
