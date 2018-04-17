import React, { Component } from 'react'
import styled from 'styled-components'
import { Button, Input, Icon, Form } from 'antd'
import { Link } from 'react-static'

const FormItem = Form.Item

class Home extends Component {
  handleSubmit = e => {
    e.preventDefault()
    const data = this.props.form.getFieldsValue()
    console.log(data)
  }

  render () {
    const { getFieldDecorator } = this.props.form

    return (
      <Wrap>
        <Card>
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator('username')(
                <Input
                  placeholder="username"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password')(
                <Input
                  placeholder="password"
                  type="password"
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                />
              )}
            </FormItem>
            <FormItem>
              <StyledButton type="primary" htmlType="submit">
                登录
              </StyledButton>
              <Link to="/about">关于</Link>
            </FormItem>
          </Form>
        </Card>
      </Wrap>
    )
  }
}

export default Form.create()(Home)

const Wrap = styled.div``

const StyledButton = styled(Button)`
  width: 100%;
`

const Card = styled.div`
  width: 250px;
  padding: 30px;
  margin: 150px auto;
  background: #fff;
  height: 230px;
`
