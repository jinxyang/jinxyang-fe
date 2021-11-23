const normalizer = (array, prop, formatter = (a) => a) => {
  const map = {}
  array.forEach((item) => {
    map[formatter(item[prop])] = item
  })
  return map
}

export default normalizer
