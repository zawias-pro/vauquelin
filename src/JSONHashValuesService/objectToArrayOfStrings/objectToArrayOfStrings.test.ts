import { objectToArrayOfStrings } from './objectToArrayOfStrings'

describe('objectToArrayOfStrings', () => {
  it('should return array of the values', () => {
    const inputObject = {
      prop1: 'string1',
      prop2: {
        prop21: 'string2',
        prop22: () => { return },
      },
      prop3: [
        'string3',
        1,
        () => { return },
        [
          'string4',
        ],
      ],
    }

    const result = objectToArrayOfStrings(inputObject)

    expect(result).toMatchObject([
      'string1',
      'string2',
      'string3',
      'string4',
    ])
  })
})
