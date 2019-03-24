import { from, of } from 'rxjs'
import { mergeMap, delay, share } from 'rxjs/operators'
import { JSONHashValuesService } from '../JSONHashValuesService'

export interface ITranslateService {
  translate: (text: string, onFinish: any) => void
}

class TranslateService implements ITranslateService {
  public translate = (text: string, onFinish: any): void => {
    const item$ = from(new JSONHashValuesService(text).getHashValues())

    const request$ = item$.pipe(
      mergeMap(x => {
        console.log(`request$: start request ${x}...`)

        return of(`${x}: response received`).pipe(delay(Math.random() * 1000))
      }),
      share(),
    )

    request$.subscribe(onFinish)
  }
}

export { TranslateService }
