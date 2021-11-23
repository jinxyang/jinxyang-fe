import React from 'react'
import styled from 'styled-components'

import Container from '../Container'
import withForm from './withForm'

const StyledFooter = styled.div`
  padding-top: var(--gap);
`

const Form = (
  {
    name = '',
    components = {},
    fields = [],
    values = {},
    showError = false,
    span = 12,
    sm = 0,
    md = 0,
    lg = 0,
    xl = 0,
    xxl = 0,
    labelInline = true,
    labelWidth = '70px',
    labelLeft = false,
    onChange = () => {},
    onSubmit = () => {},
    children = '',
  },
  ref,
) => {
  const formComponents = React.useMemo(() => {
    const result = {}
    Object.keys(components).forEach((type) => {
      result[type] = withForm(components[type])
    })
    return result
  }, [components])

  const containerSpans = React.useMemo(
    () => ({
      span,
      sm,
      md,
      lg,
      xl,
      xxl,
    }),
    [lg, md, sm, span, xl, xxl],
  )
  const [errors, setErrors] = React.useState({})
  const errorMessage = React.useMemo(() => {
    const errorKeys = Object.keys(errors).filter((key) => errors[key])
    return errorKeys.length ? errors[errorKeys[0]] : ''
  }, [errors])

  const handleChange = (key, value) => {
    onChange({ ...values, [key]: value })
  }

  const handleError = React.useCallback(
    (key, message) => {
      if (message !== errors[key]) {
        setErrors({ ...errors, [key]: message })
      }
    },
    [errors],
  )

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault()
      onSubmit(errorMessage)
    },
    [onSubmit, errorMessage],
  )

  return (
    <form ref={ref} name={name} onSubmit={handleSubmit}>
      <Container mode="flex" column={true}>
        <Container.Item>
          <Container mode="grid" gap={'calc(var(--gap) * 1.5)'}>
            {fields
              .map(
                ({
                  type,
                  key,
                  label,
                  rules = [],
                  span = containerSpans.span,
                  sm = containerSpans.sm,
                  md = containerSpans.md,
                  lg = containerSpans.lg,
                  xl = containerSpans.xl,
                  xxl = containerSpans.xxl,
                  props = {},
                }) => {
                  const InputComponent = formComponents[type]
                  if (!InputComponent) return null
                  return (
                    <Container.Item
                      span={span}
                      sm={sm}
                      md={md}
                      lg={lg}
                      xl={xl}
                      xxl={xxl}
                      key={key}
                    >
                      <InputComponent
                        name={key}
                        value={values[key]}
                        label={label}
                        rules={rules}
                        showError={showError}
                        labelInline={labelInline}
                        labelWidth={labelWidth}
                        labelLeft={labelLeft}
                        {...props}
                        onChange={(value) => handleChange(key, value)}
                        onError={(message) => handleError(key, message)}
                      />
                    </Container.Item>
                  )
                },
              )
              .filter(Boolean)}
          </Container>
        </Container.Item>
        <Container.Item>
          {children && <StyledFooter>{children}</StyledFooter>}
        </Container.Item>
      </Container>
    </form>
  )
}

export default React.forwardRef(Form)
