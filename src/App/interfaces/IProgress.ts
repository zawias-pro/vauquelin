import { TranslationObject } from './ITranslationObject'

export interface IProgress {
  current: TranslationObject
  done: number
  all: number
}
