import React from 'react'
import styled from 'styled-components'

const StyledWrap = styled.div`
  padding: var(--gap);
  background: #fff;
`

const App = ({ children }) => {
  return <StyledWrap>{children}</StyledWrap>
}

export default App
