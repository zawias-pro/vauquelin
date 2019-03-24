import { testObject } from '../../utils/testObject'
import { JSONHashValuesService } from './JSONHashValuesService'

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

    expect(result).toEqual([
      {key: 'h34b577be20fbc15477aadb9a08101ff9', value: 'string1'},
      {key: 'h91c0c59c8f6fc9aa2dc99a89f2fd0ab5', value: 'string2'},
      {key: 'h9e6dc8685bf3c1b338f2011ace904887', value: 'string3'},
      {key: 'h670295d542d13c7ad91cd5b159b60ab2', value: 'string4'},
    ])
  })

  it('returns hash values for non-json', () => {
    const inputString = `
      line1
      line2
      line3
    `.trim()
    const instance = new JSONHashValuesService(inputString)
    const result = instance.getHashValues()

    expect(result).toEqual([
      {key: 'h137f72c3708c6bd0de00a0e5a69c699b', value: 'line1'},
      {key: 'he6251bcf1a7dc3ba5e7933e325bbe605', value: 'line2'},
      {key: 'h0c63b2a7c2c4808fb709c745630f6e29', value: 'line3'},
    ])
  })
})
