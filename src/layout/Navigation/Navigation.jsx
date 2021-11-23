import React from 'react'
// import { useHistory } from 'react-router-dom'

import { Nav } from '@jinxyang/components'

const Navigation = ({ list = [] }) => {
  // const history = useHistory()
  return <Nav list={list} />
}

export default Navigation
