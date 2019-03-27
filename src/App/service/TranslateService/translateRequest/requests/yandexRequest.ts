import { map } from 'rxjs/operators'
import { ajax, AjaxResponse } from 'rxjs/ajax'

import { TranslateRequestType } from '../translateRequest'

const URL = 'https://translate.yandex.net/api/v1.5/tr.json/translate'

const yandexRequest: TranslateRequestType = (input, state) => {
  const API_KEY = state.useCustomApiKey
    ? state.apiKey
    : process.env.YANDEX_API_KEY

  return ajax.post(`${URL}?key=${API_KEY}&lang=pl`, {
    text: input.value,
  }).pipe(
    map((response: AjaxResponse) => ({
      key: input.key,
      original: input.value,
      translated: response.response.text,
    })),
  )
}

export { yandexRequest }
