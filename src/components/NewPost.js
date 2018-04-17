import React, { Component } from 'react'
import { Button } from 'antd'
import Layout from './Layout'

class NewPost extends Component {
  handleClick = () => {
    this.props.submitPost()
  }

  render () {
    return (
      <Layout>
        <Button onClick={this.handleClick}>提交文章</Button>
      </Layout>
    )
  }
}

export default NewPost
