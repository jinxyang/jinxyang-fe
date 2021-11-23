import React from 'react'
import styled from 'styled-components'

const StyledWrap = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  overflow-x: ${({ theme }) => (theme.x ? 'scroll' : 'hidden')};
  overflow-y: ${({ theme }) => (theme.y ? 'scroll' : 'hidden')};
`

const Scroll = ({ x = false, y = false, children }) => {
  return <StyledWrap theme={{ x, y }}>{children}</StyledWrap>
}

export default Scroll
