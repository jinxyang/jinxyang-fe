const throttle = (fn, delay = 1000) => {
  let prev = 0
  return (...args) => {
    const now = Date.now()
    if (now - prev > delay) {
      fn(...args)
      prev = now
    }
  }
}

export default throttle
