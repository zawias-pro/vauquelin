import { of } from 'rxjs'
import uuid from 'uuid/v4'
import { catchError, map } from 'rxjs/operators'
import { ajax, AjaxError, AjaxRequest, AjaxResponse } from 'rxjs/ajax'

import { TranslateRequestType } from '../translateRequest'

const URL = 'https://api.cognitive.microsofttranslator.com/translate'

const microsoftRequest: TranslateRequestType = (input, state) => {
  const API_KEY = state.useCustomApiKey
    ? state.apiKey
    : process.env.MICROSOFT_API_KEY

  const request: AjaxRequest = {
    url: `${URL}?api-version=3.0&to=pl`,
    body: [
      {
        text: input,
      },
    ],
    headers: {
      'Ocp-Apim-Subscription-Key': API_KEY,
      'Content-type': 'application/json',
      'X-ClientTraceId': uuid(),
    },
    method: 'POST',
  }

  const response$ = ajax(request)

  const result = response$.pipe(
    map((response: AjaxResponse) => ({
      original: input,
      translated: response.response[0].translations[0].text.trim(),
    })),
    catchError((error: AjaxError) => of({
      original: input,
      translated: `error: ${error}`,
    })),
  )

  return result
}

export { microsoftRequest }
