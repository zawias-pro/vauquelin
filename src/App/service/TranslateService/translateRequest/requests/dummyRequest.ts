import { of } from 'rxjs'
import { delay } from 'rxjs/operators'

import { TranslateRequestType } from '../translateRequest'

const dummyRequest: TranslateRequestType = (input, _) => {
    return of({
        hash: input.hash,
        original: input.value,
        translated: `translated ${input.value}`,
    }).pipe(
        delay(Math.random() * 3000),
    )
}

export { dummyRequest }
