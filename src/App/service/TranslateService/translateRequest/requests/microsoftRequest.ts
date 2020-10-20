import { of } from 'rxjs'
import { v4 as uuid } from 'uuid'
import { catchError, map } from 'rxjs/operators'
import { ajax, AjaxError, AjaxResponse } from 'rxjs/ajax'

import { TranslateRequestType } from '../translateRequest'

const URL = 'https://api.cognitive.microsofttranslator.com/translate'

const microsoftRequest: TranslateRequestType = (input, state) => {
    const API_KEY = state.useCustomApiKey
        ? state.apiKey
        : process.env.MICROSOFT_API_KEY

    return ajax.post(
        `${URL}?api-version=3.0&to=pl`,
        [
            {
                text: input,
            },
        ],
        {
            'Ocp-Apim-Subscription-Key': API_KEY,
            'Content-type': 'application/json',
            'X-ClientTraceId': uuid(),
        },
    ).pipe(
        map((response: AjaxResponse) => ({
            original: input,
            translated: response.response[0].translations[0].text.trim(),
        })),
        catchError((error: AjaxError) => of({
            original: input,
            translated: `error: ${error}`,
        })),
    )
}

export { microsoftRequest }
