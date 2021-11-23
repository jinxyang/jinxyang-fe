const root = document.documentElement

const setProperty = (name, value) => {
  const style = root.style
  const varName = '--' + name
  const varValue = typeof value === 'number' ? value + 'px' : value
  style.setProperty(varName, varValue)
}

const set = (nameOrObject = {}, value) => {
  if (typeof nameOrObject === 'string') {
    setProperty(nameOrObject, value)
  } else {
    Object.keys(nameOrObject).forEach((name) => {
      const value = nameOrObject[name]
      setProperty(name, value)
    })
  }
}

const get = (name) => {
  const varName = '--' + name
  const style = getComputedStyle(root)
  const value = style.getPropertyValue(varName)
  const result = { value }
  if (value.includes('px')) {
    result.number = Number(value.replace('px', ''))
  }
  return result
}

export default {
  set,
  get,
}
