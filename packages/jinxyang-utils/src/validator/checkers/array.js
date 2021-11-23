import validator from '../core'

const typeChecker = ([prevPass, rule, value]) => {
  if (!prevPass || !rule.type) {
    return [prevPass, rule, value]
  }
  return [Array.isArray(value), rule, value]
}

const lengthChecker = ([prevPass, rule, value]) => {
  if (!prevPass || !rule.length) {
    return [prevPass, rule, value]
  }
  const min = Array.isArray(rule.length) ? rule.length[0] : rule.length
  const max = Array.isArray(rule.length) ? rule.length[1] ?? Infinity : Infinity
  if (value.length < min || value.length > max) {
    return [false, rule, value]
  }
  return [true, rule, value]
}

const fieldsChecker = ([prevPass, rule, value]) => {
  if (!prevPass || !rule.fields || !rule.fields) {
    return [prevPass, rule, value]
  }
  const errorField =
    value.find((field) => {
      return validator(field, rule.fields)
    }) ?? undefined
  console.log(errorField)
  return [true, rule, value]
}

const checker = (value, rules = []) => {
  const errorRule = rules.find((rule) => {
    const [pass] =
      [true, rule, value] |> typeChecker |> lengthChecker |> fieldsChecker
    return !pass
  })
  return errorRule?.message
}

export default checker
