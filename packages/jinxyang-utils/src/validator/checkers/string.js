const typeChecker = ([prevPass, rule, value]) => {
  if (!prevPass || !rule.type) {
    return [prevPass, rule, value]
  }
  return [typeof value === 'string', rule, value]
}

const requiredChecker = ([prevPass, rule, value]) => {
  if (!prevPass || !rule.required) {
    return [prevPass, rule, value]
  }
  const newValue = value.trim()
  return [!!newValue, rule, newValue]
}

const checker = (value, rules = []) => {
  const errorRule = rules.find((rule) => {
    const [pass] = [true, rule, value] |> typeChecker |> requiredChecker
    return !pass
  })
  return errorRule?.message
}

export default checker
