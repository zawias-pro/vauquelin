import { of } from 'rxjs'
import { delay, map } from 'rxjs/operators'

import { TranslateRequestType } from '../translateRequest'

const dummyRequest: TranslateRequestType = (input, _) => {
  const request = {}

  const response$ = of(input).pipe(
    delay(Math.random() * 3000),
  )

  const result = response$.pipe(
    map(response => ({
      original: response,
      translated: `translated ${response}`,
    })),
  )

  return result
}

export { dummyRequest }
