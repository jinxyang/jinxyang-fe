import React from 'react'

const Password = ({ value = '', name = '', onChange = () => {}, ...props }) => {
  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <input
      type="password"
      name={name}
      value={value}
      autoComplete="on"
      onChange={handleChange}
      {...props}
    />
  )
}

export default Password
