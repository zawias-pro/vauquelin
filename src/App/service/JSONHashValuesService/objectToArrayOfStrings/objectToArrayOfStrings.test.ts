import { testObject } from '../../../utils/testObject'
import { objectToArrayOfStrings } from './objectToArrayOfStrings'

describe('objectToArrayOfStrings', () => {
  it('should return array of the values', () => {
    const result = objectToArrayOfStrings(testObject)

    expect(result).toMatchObject([
      'string1',
      'string2',
      'string3',
      'string4',
    ])
  })

  it('should trim the values', () => {
    const result = objectToArrayOfStrings({
      key: '    value    ',
    })

    expect(result).toMatchObject([
      'value',
    ])
  })
})
