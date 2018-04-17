import React, { Component } from 'react'
import styled from 'styled-components'
import { Button, Input, Icon, Form } from 'antd'

const FormItem = Form.Item

class Home extends Component {
  render () {
    return (
      <Wrap>
        <Card>
          <Form>
            <FormItem>
              <Input
                placeholder="username"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
            </FormItem>
            <FormItem>
              <Input
                placeholder="password"
                type="password"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
            </FormItem>
            <FormItem>
              <StyledButton type="primary" htmlType="submit">
                登录
              </StyledButton>
            </FormItem>
          </Form>
        </Card>
      </Wrap>
    )
  }
}

export default Home

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
