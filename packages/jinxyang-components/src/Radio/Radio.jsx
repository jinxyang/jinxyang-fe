import React from 'react'

import { Radio } from 'antd'

const ProRadio = ({ value = '', onChange = () => {}, ...props }) => {
  return (
    <span>
      <Radio.Group
        {...props}
        optionType="button"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </span>
  )
}

export default ProRadio
