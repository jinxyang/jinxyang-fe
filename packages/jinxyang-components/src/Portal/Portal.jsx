import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const Portal = ({ children, container = document.body }) => {
  const [mountNode, setMountNode] = useState(null)

  useEffect(() => {
    setMountNode(container || document.body)
    return () => {
      setMountNode(null)
    }
  }, [container])

  return mountNode && createPortal(children, container)
}

export default Portal
