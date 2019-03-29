import { Observable } from 'rxjs'

import { AppState } from '../../../App'
import { dummyRequest } from './requests/dummyRequest'
import { yandexRequest } from './requests/yandexRequest'
import { ITranslationObject } from '../../../interfaces/ITranslationObject'

export type TranslateRequestType = (input: string, state: AppState) => Observable<ITranslationObject>

export const translateRequest: TranslateRequestType = (input, state) => {
  switch (state.provider.id) {
    case 'yandex':
      return yandexRequest(input, state)
    case 'dummy':
    default:
      return dummyRequest(input, state)
  }
}
