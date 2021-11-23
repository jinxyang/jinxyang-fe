import React, { useState } from 'react'
import styled from 'styled-components'
import { Space, Button } from 'antd'

import { App, Form, Input, Password } from '@jinxyang/components'
import { useFetch } from '@jinxyang/hooks'

import { loginService } from 'services'

const StyledWrap = styled.div`
  width: 300px;
`

const loginComponents = {
  Input,
  Password,
}

const loginFields = [
  {
    type: 'Input',
    key: 'username',
    label: 'Username',
    rules: [
      { type: 'string', required: true, message: `'Username' is required` },
    ],
  },
  {
    type: 'Password',
    key: 'password',
    label: 'Password',
    rules: [
      { type: 'string', required: true, message: `'Password' is required` },
    ],
  },
]

const Login = ({ onClose = () => {} }) => {
  const [values, setValues] = useState({})
  const [isErrorShow, setErrorShow] = useState(false)
  const [{ loading }, fetchLogin] = useFetch(loginService, ({ code, data }) => {
    if (!code) {
      onClose()
      localStorage.setItem('token', data.token)
    }
  })

  const handleSubmit = async (message) => {
    setErrorShow(!!message)
    !message &&
      !(await fetchLogin(values)).code &&
      window.dispatchEvent(new Event('storage'))
  }

  return (
    <StyledWrap>
      <App>
        <Form
          name="login"
          span={12}
          components={loginComponents}
          fields={loginFields}
          values={values}
          showError={isErrorShow}
          onChange={setValues}
          onSubmit={handleSubmit}
        >
          <Space>
            <Button htmlType="submit" disabled={loading}>
              Login
            </Button>
            <Button htmlType="button" disabled={loading} onClick={onClose}>
              Cancel
            </Button>
          </Space>
        </Form>
      </App>
    </StyledWrap>
  )
}

export default Login
