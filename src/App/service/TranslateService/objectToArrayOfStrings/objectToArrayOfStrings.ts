import _uniq from 'lodash/uniq'
import _isArray from 'lodash/isArray'
import _isString from 'lodash/isString'
import _isObject from 'lodash/isObject'
import _flattenDeep from 'lodash/flattenDeep'

export const objectToArrayOfStrings = (input: {} | []): string[] => {
  const object: {} = Array.isArray(input) ? {...input} : input
  const result: string[] = []

  Object.values(object).forEach((value) => {
    if (_isString(value)) {
      result.push(value.trim())
    }
    if (_isObject(value) || _isArray(value)) {
      const arr = objectToArrayOfStrings(value)
      const flatArr = _flattenDeep(arr)

      result.push(...flatArr)
    }
  })

  return _uniq(result)
}
