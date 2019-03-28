import { testObject } from '../../../utils/testObject'
import { replaceUsingValueHash } from './replaceUsingValueHash'
import { ITranslationObject } from '../../../interfaces/ITranslationObject'

describe('replaceUsingValueHash', () => {
  it('should replace values with their translations using hashes and hash function', () => {
    const inputJSON = JSON.stringify(testObject)
    const translations: ITranslationObject[] = [
      { hash: 'string1', original: 'string1', translated: 'translated string1' },
      { hash: 'string2', original: 'string2', translated: 'translated string2' },
      { hash: 'string3', original: 'string3', translated: 'translated string3' },
      { hash: 'string4', original: 'string4', translated: 'translated string4' },
    ]
    const hashFunction = (input: string) => input

    const result = replaceUsingValueHash(inputJSON, translations, hashFunction)

    expect(JSON.parse(result)).toMatchObject({
      prop1: 'translated string1',
      prop2: {
        prop21: 'translated string2',
      },
      prop3: [
        'translated string3',
        1,
        null,
        [
          'translated string4',
        ],
      ],
    })
  })
})
