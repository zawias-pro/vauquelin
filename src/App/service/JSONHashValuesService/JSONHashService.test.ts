import { testObject } from '../../utils/testObject'
import { JSONHashValuesService } from './JSONHashService'

describe('JSONHashService', () => {
  it('should properly determine if string is a json', () => {
    const invalidJson = '{ "test": "test }'
    const validJson = '{ "test": "test" }'

    expect(JSONHashValuesService.isJSON(invalidJson)).toBe(false)
    expect(JSONHashValuesService.isJSON(validJson)).toBe(true)
  })

  it('returns hash values for json', () => {
    const jsonString = JSON.stringify(testObject)
    const instance = new JSONHashValuesService(jsonString)
    const result = instance.getHashValues()

    expect(result).toEqual({
      string1: 'string1',
      string2: 'string2',
      string3: 'string3',
      string4: 'string4',
    })
  })

  it('returns hash values for non-json', () => {
    const inputString = `
      line1
      line2
      line3
    `.trim()
    const instance = new JSONHashValuesService(inputString)
    const result = instance.getHashValues()

    expect(result).toEqual({
      line1: 'line1',
      line2: 'line2',
      line3: 'line3',
    })
  })
})
