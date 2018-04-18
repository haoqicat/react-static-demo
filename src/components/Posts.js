import React, { Component } from 'react'
import Layout from './Layout'

class Posts extends Component {
  componentDidMount () {
    this.props.loadPosts()
  }

  render () {
    const { posts } = this.props
    console.log('posts', posts)
    return <Layout>Posts</Layout>
  }
}

export default Posts
