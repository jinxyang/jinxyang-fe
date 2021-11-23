import React from 'react'

import { Select } from 'antd'

const ProSelect = ({ value = [], onChange = () => {}, ...props }) => {
  return (
    <span>
      <Select
        {...props}
        value={value[0]}
        onChange={(...value) => onChange(value)}
      />
    </span>
  )
}

export default ProSelect
