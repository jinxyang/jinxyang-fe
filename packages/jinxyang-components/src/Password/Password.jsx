import React from 'react'

import { Input } from 'antd'

const ProPassword = ({ value = '', onChange = () => {}, ...props }) => {
  return (
    <span>
      <Input.Password
        {...props}
        autoComplete="on"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </span>
  )
}

export default ProPassword
