import _isString from 'lodash/isString'

import { ITranslationObject } from '../../../interfaces/ITranslationObject'

export const replaceValuesWithTranslations = (inputJSON: string, translations: ITranslationObject[]) => {
  const modified = JSON.parse(inputJSON, (key, value) => {
    if (_isString(value)) {
      const found = translations.find(item => item.original === value)

      if (found) {
        return found.translated
      }
    }

    return value
  })

  return JSON.stringify(modified, null, 2)
}
