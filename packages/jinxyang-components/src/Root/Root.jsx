import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* *,
  *::before,
  *::after {
    box-sizing: border-box;
  } */

  ::-webkit-scrollbar {
    width: 0;
  }

  :root {
    --gap: 16px;
    --size: 16px;
  }

  body {
    background: #f0f0f0;

    /* margin: 0;
    color: #888;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, segoe ui, Roboto,
      helvetica neue, Arial, noto sans, sans-serif, apple color emoji,
      segoe ui emoji, segoe ui symbol, noto color emoji;
    line-height: 1.5; */
  }
`

const StyledWrap = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

const Root = ({ children }) => {
  return (
    <StyledWrap>
      <GlobalStyle />
      {children}
    </StyledWrap>
  )
}

export default Root
