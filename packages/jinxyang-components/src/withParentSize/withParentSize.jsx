import React, { useRef, useEffect, forwardRef } from 'react'

import { useParentSize } from '@jinxyang/hooks'

const withParentSize = (WrappedComponent, ref) => {
  const WrapperComponent = (props, ref) => {
    const innerRef = useRef(null)
    const parentSize = useParentSize(innerRef)

    useEffect(() => {
      if (ref) {
        ref.current = innerRef.current
      }
    }, [ref])
    return (
      <WrappedComponent
        ref={innerRef}
        {...props}
        parentWidth={parentSize.width}
        parentHeight={parentSize.height}
      />
    )
  }
  return forwardRef(WrapperComponent)
}

export default withParentSize
