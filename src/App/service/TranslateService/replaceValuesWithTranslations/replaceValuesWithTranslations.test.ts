import { ITranslationObject } from '../../../interfaces/ITranslationObject'
import { replaceValuesWithTranslations } from './replaceValuesWithTranslations'

describe('replaceValuesWithTranslations', () => {
  it('should replace values with translations', () => {
    const inputObject = {
      prop1: 'string1',
      prop2: {
        prop21: 'string2',
        prop22: () => {
          return
        },
      },
      prop3: [
        'string3',
        1,
        () => {
          return
        },
        [
          'string4',
        ],
      ],
    }

    const inputJSON: string = JSON.stringify(inputObject)

    const translations: ITranslationObject[] = [
      { original: 'string1', translated: 'translated1' },
      { original: 'string2', translated: 'translated2' },
      { original: 'string3', translated: 'translated3' },
      { original: 'string4', translated: 'translated4' },
    ]

    const result = replaceValuesWithTranslations(inputJSON, translations)

    const resultObject = JSON.parse(result)

    expect(resultObject).toEqual({
      prop1: 'translated1',
      prop2: {
        prop21: 'translated2',
      },
      prop3: [
        'translated3',
        1,
        [
          'translated4',
        ],
      ],
    })
  })
})
