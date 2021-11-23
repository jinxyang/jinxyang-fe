import React from 'react'
import styled from 'styled-components'

import { validator } from '@jinxyang/utils'

const StyledWrap = styled.label`
  position: relative;
  display: flex;
  flex-direction: ${({ theme }) => (theme.labelInline ? 'row' : 'column')};
  overflow: visible;
`
const StyledHeader = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  margin-right: var(--gap);
  padding-bottom: ${({ theme }) => (theme.labelInline ? 0 : '6px')};
`
const StyledLabel = styled.span`
  position: relative;
  display: flex;
  justify-content: ${({ theme }) =>
    theme.labelLeft ? 'flex-start' : 'flex-end'};
  align-items: center;
  width: ${({ theme }) => (theme.labelInline ? theme.labelWidth : 'auto')};
  overflow: hidden;

  span {
    position: relative;
    top: 4px;
    margin-right: 4px;
    color: #ff4d4f;
    font-size: 1.4em;
    font-family: SimSun, sans-serif;
    line-height: 1;
  }
`
const StyledContent = styled.div`
  flex: 1;
`
const StyledFooter = styled.div`
  position: absolute;
  top: 100%;
  display: flex;
  flex: 1;
  align-items: flex-end;
  padding-top: 2px;
`
const StyledMessage = styled.p`
  margin: 0;
  color: #ff4d4f;
  font-size: 0.85em;
`

const withForm = (WrappedComponent) => {
  if (!WrappedComponent) return null
  const WrapperComponent = (
    {
      name = '',
      value = '',
      label = '',
      rules = [],
      showError = false,
      labelInline = true,
      labelWidth = '70px',
      labelLeft = false,
      style = {},
      onError = () => {},
      ...props
    },
    ref,
  ) => {
    const errorMessage = React.useMemo(
      () => validator(value, rules),
      [value, rules],
    )

    const required = React.useMemo(
      () => !!rules.find(({ required }) => required),
      [rules],
    )

    React.useEffect(() => {
      onError(errorMessage || undefined)
    }, [onError, errorMessage])

    return (
      <StyledWrap theme={{ labelInline }}>
        <StyledHeader theme={{ labelInline }}>
          <StyledLabel theme={{ labelInline, labelWidth, labelLeft }}>
            {required && <span>*</span>}
            {label}
          </StyledLabel>
        </StyledHeader>
        <StyledContent>
          <WrappedComponent
            ref={ref}
            name={name}
            value={value}
            style={{ ...style, width: '100%' }}
            {...props}
          />
          <StyledFooter>
            {showError && errorMessage && (
              <StyledMessage>{errorMessage}</StyledMessage>
            )}
          </StyledFooter>
        </StyledContent>
      </StyledWrap>
    )
  }
  return React.forwardRef(WrapperComponent)
}

export default withForm
