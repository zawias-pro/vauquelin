import { Observable, of } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { ajax, AjaxError, AjaxRequest, AjaxResponse } from 'rxjs/ajax'

import { TranslateRequestType } from '../translateRequest'

const URL = 'https://translate.yandex.net/api/v1.5/tr.json/translate'

const yandexRequest: TranslateRequestType = (input, state) => {
  const API_KEY = state.useCustomApiKey
    ? state.apiKey
    : process.env.YANDEX_API_KEY

  const request: AjaxRequest = {
    url: `${URL}?key=${API_KEY}&lang=pl`,
    body: {
      text: input,
    },
    method: 'POST',
  }

  const response$: Observable<AjaxResponse> = ajax(request)

  const result = response$.pipe(
    map((response: AjaxResponse) => ({
      original: input,
      translated: response.response.text[0].trim(),
    })),
    catchError((error: AjaxError) => of({
      original: input,
      translated: `error: ${error}`,
    })),
  )

  return result
}

export { yandexRequest }
