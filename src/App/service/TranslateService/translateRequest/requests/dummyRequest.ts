import { of } from 'rxjs'
import { delay } from 'rxjs/operators'

import { TranslateRequestType } from '../translateRequest'

const dummyRequest: TranslateRequestType = (input, _) => {
    return of({
        original: input,
        translated: `translated ${input}`,
    }).pipe(
        delay(Math.random() * 3000),
    )
}

export { dummyRequest }
