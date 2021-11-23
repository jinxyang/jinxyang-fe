import React, {
  Children,
  cloneElement,
  isValidElement,
  forwardRef,
} from 'react'
import styled, { css } from 'styled-components'

import withParentSize from '../withParentSize'

const gapStyle = css`
  gap: ${({ theme }) => theme.gap};
`
const flexStyle = css`
  ${gapStyle}

  display: flex;
  flex-direction: ${({ theme }) => (theme.column ? 'column' : 'row')};
`
const gridStyle = css`
  ${gapStyle}

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-content: stretch;
  align-content: start;
`

const StyledWrap = styled.div`
  ${({ theme }) => (theme.mode === 'flex' ? flexStyle : '')}
  ${({ theme }) => (theme.mode === 'grid' ? gridStyle : '')}

  width: ${({ theme }) => theme.width};
  height: ${({ theme }) => theme.height};
  overflow-x: ${({ theme }) => (theme.scrollX ? 'scroll' : 'visible')};
  overflow-y: ${({ theme }) => (theme.scrollY ? 'scroll' : 'visible')};
`

const Container = (
  {
    mode = 'static', // flex | grid
    gap = 'var(--gap)',
    column = false,
    width = '100%',
    height = '100%',
    scrollX = false,
    scrollY = false,
    parentWidth = 0,
    style = {},
    children,
  },
  ref,
) => {
  const arrayChildren = Children.toArray(children)

  return (
    <StyledWrap
      ref={ref}
      theme={{
        mode,
        gap,
        column,
        width,
        height,
        scrollX,
        scrollY,
      }}
      style={style}
    >
      {Children.map(arrayChildren, (child) =>
        isValidElement(child) ? cloneElement(child, { mode }) : child,
      )}
    </StyledWrap>
  )
}

export default withParentSize(forwardRef(Container))
