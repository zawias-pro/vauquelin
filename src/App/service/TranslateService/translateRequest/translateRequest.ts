import { Observable } from 'rxjs'

import { AppState } from '../../../App'
import { providers } from '../../../types/Provider'
import { dummyRequest } from './requests/dummyRequest'
import { yandexRequest } from './requests/yandexRequest'
import { ITranslationObject } from '../../../interfaces/ITranslationObject'

export type TranslateRequestType = (input: string, state: AppState) => Observable<ITranslationObject>

export const translateRequest: TranslateRequestType = (input, state) => {
  switch (state.provider.id) {
    case providers.yandex.id:
      return yandexRequest(input, state)
    case providers.dummy.id:
    default:
      return dummyRequest(input, state)
  }
}
