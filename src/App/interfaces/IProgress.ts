import { ITranslationObject } from './ITranslationObject'

export interface IProgress {
  current: ITranslationObject
  done: number
  all: number
}
