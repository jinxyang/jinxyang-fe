import React from 'react'

import { Input } from 'antd'

const ProInput = ({ value = '', onChange = () => {}, ...props }) => {
  return (
    <span>
      <Input
        {...props}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </span>
  )
}

export default ProInput
