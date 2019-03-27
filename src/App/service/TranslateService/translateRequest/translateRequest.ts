import { Observable } from 'rxjs'

import { AppState } from '../../../App'
import { providers } from '../../../types/Provider'
import { dummyRequest } from './requests/dummyRequest'
import { yandexRequest } from './requests/yandexRequest'
import { IKeyValue } from '../../../interfaces/IKeyValue'
import { ITranslationObject } from '../../../interfaces/ITranslationObject'

export type TranslateRequestType = (input: IKeyValue, state: AppState) => Observable<ITranslationObject>

export const translateRequest: TranslateRequestType = (input, state) => {
  switch (state.provider.id) {
    case providers.yandex.id:
      return yandexRequest(input, state)
    case providers.dummy.id:
    default:
      return dummyRequest(input, state)
  }
}
