import React from 'react'

const Input = ({ value = '', name = '', onChange = () => {}, ...props }) => {
  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={handleChange}
      {...props}
    />
  )
}

export default Input
