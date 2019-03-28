import { HashFunctionType } from '../../../interfaces/HashFunctionType'
import { ITranslationObject } from '../../../interfaces/ITranslationObject'

type ReplaceUsingValueHashType = (
  inputJSON: string,
  translations: ITranslationObject[],
  hashFunction: HashFunctionType,
) => string

export const replaceUsingValueHash: ReplaceUsingValueHashType = (inputJSON, translations, hashFunction) => {
  return inputJSON
}
