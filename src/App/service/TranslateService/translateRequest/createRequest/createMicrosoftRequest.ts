import uuid from 'uuid/v4'
import { CreateRequestType } from './CreateRequestType'

const URL = 'https://api.cognitive.microsofttranslator.com/translate'

const createMicrosoftRequest: CreateRequestType = (input, apiKey) => ({
  url: `${URL}?api-version=3.0&to=pl`,
  body: [
    {
      text: input,
    },
  ],
  headers: {
    'Ocp-Apim-Subscription-Key': apiKey,
    'Content-type': 'application/json',
    'X-ClientTraceId': uuid(),
  },
  method: 'POST',
})

export { createMicrosoftRequest }
