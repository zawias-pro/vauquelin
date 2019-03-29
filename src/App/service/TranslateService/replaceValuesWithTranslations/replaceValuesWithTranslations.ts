import _isString from 'lodash/isString'

import { ITranslationObject } from '../../../interfaces/ITranslationObject'

export const replaceValuesWithTranslations = (inputJSON: string, translations: ITranslationObject[]) => {
  const modified = JSON.parse(inputJSON, (key, value) => {
    if (_isString(value)) {
      return 'translated'
    }

    return value
  })

  return JSON.stringify(modified)
}
