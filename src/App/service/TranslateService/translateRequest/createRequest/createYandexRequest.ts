import { CreateRequestType } from './CreateRequestType'

const URL = 'https://translate.yandex.net/api/v1.5/tr.json/translate'

const createYandexRequest: CreateRequestType = (input, apiKey) => {
  return {
    url: `${URL}?key=${apiKey}&lang=pl`,
    body: {
      text: input,
    },
    method: 'POST',
  }
}

export { createYandexRequest }
