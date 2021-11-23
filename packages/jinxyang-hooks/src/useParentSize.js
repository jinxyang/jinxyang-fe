import { useState, useEffect } from 'react'

const useParentSize = (ref) => {
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new ResizeObserver((entries) => {
      const { contentRect } = entries[0]
      setSize({
        width: ~~contentRect.width,
        height: ~~contentRect.height,
      })
    })
    observer.observe(el.parentNode)

    return () => {
      el?.parentNode && observer.unobserve(el.parentNode)
    }
  }, [ref])

  return size
}

export default useParentSize
