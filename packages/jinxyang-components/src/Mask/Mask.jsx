import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Portal from '../Portal'

const StyledMask = styled.div`
  @keyframes show {
    from {
      transform: scale(1.2);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes hide {
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(1.1);
      opacity: 0;
    }
  }

  position: fixed;
  top: 0;
  left: 0;
  z-index: 5000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0 0 0 / 50%);
  animation: ${({ theme }) => (theme.show ? 'show' : 'hide')} 150ms linear
    forwards;
`

const Mask = ({ show = false, children }) => {
  const [innerShow, setShow] = useState(false)

  useEffect(() => {
    if (show === innerShow) return
    if (show) {
      setShow(true)
    } else {
      setTimeout(() => {
        setShow(false)
      }, 150)
    }
  }, [show, innerShow])

  return (
    innerShow && (
      <Portal>
        <StyledMask theme={{ show: innerShow && show }}>{children}</StyledMask>
      </Portal>
    )
  )
}

export default Mask
