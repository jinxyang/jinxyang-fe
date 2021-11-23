import React from 'react'
import styled, { css } from 'styled-components'

// const mediaQueryList = {
//   sm: 576,
//   md: 768,
//   lg: 992,
//   xl: 1200,
//   xxl: 1400,
// }

const gridMediaQueryStyle = (point, mediaQueryString) => css`
  @media (${mediaQueryString}) {
    grid-column: ${'span ' + point};
  }
`

const flexStyle = css`
  flex: ${({ theme }) => theme.flex};
`

const gridStyle = css`
  grid-column: ${({ theme }) => (theme.span ? 'span ' + theme.span : 'auto')};

  ${({ theme }) =>
    theme.sm ? gridMediaQueryStyle(theme.sm, 'min-width: 576px') : ''}
  ${({ theme }) =>
    theme.md ? gridMediaQueryStyle(theme.md, 'min-width: 768px') : ''}
  ${({ theme }) =>
    theme.lg ? gridMediaQueryStyle(theme.lg, 'min-width: 992px') : ''}
  ${({ theme }) =>
    theme.xl ? gridMediaQueryStyle(theme.xl, 'min-width: 1200px') : ''}
  ${({ theme }) =>
    theme.xxl ? gridMediaQueryStyle(theme.xxl, 'min-width: 1400px') : ''}
`

const StyledWrap = styled.div`
  ${({ theme }) => (theme.mode === 'flex' ? flexStyle : '')}
  ${({ theme }) => (theme.mode === 'grid' ? gridStyle : '')}
`

const ContainerItem = ({
  mode = 'static',
  flex = 1,
  span = 0,
  sm = 0,
  md = 0,
  lg = 0,
  xl = 0,
  xxl = 0,
  style = {},
  children,
}) => {
  return (
    <StyledWrap theme={{ mode, flex, span, sm, md, lg, xl, xxl }} style={style}>
      {children}
    </StyledWrap>
  )
}

export default ContainerItem
