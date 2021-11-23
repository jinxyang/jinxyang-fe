import { useState, useEffect } from 'react'

const useMediaQuery = (mediaQueryString, defaultMatches = false) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia(mediaQueryString)
    setMatches(mql.matches)
    const listener = ({ matches }) => {
      setMatches(matches)
    }

    mql.addEventListener('change', listener)
    return () => {
      mql.removeEventListener('change', listener)
    }
  }, [mediaQueryString])
  return matches
}

export default useMediaQuery
