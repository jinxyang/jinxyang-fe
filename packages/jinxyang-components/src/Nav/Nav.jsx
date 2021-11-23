import React from 'react'
import { Link } from 'react-router-dom'

import App from '../App'

const Nav = ({ list = [] }) => {
  return (
    <App>
      <ul>
        {list.map(({ name, path, title }) => (
          <li key={name}>
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </App>
  )
}

export default Nav
