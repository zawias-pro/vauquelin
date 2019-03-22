import { from, of, Subscription } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { map, tap, concatMap, mergeMap, catchError, delay, count, share, scan, withLatestFrom } from 'rxjs/operators'

export interface ITranslateService {
  translate: (text: string) => void
}

class TranslateService implements ITranslateService {
  public translate = (text: string): void => {
    const word$ = from(text.split(' '))

    const request$ = word$.pipe(
      mergeMap(x => {
        console.log(`request$: start request ${x}...`)

        return of(`${x}: response received`).pipe(delay(Math.random() * 1000))
      }),
      share(),
    )

    const count$ = request$.pipe(count())

    request$.subscribe(x => console.log('request$:', x))

    count$.subscribe(x => console.log('count$:', x))

    const progress$ = count$.pipe(
      withLatestFrom(request$, (current) => current),
      map(a => a)
    )

    progress$.subscribe(x => console.log('progress$:', x))
  }
}

export { TranslateService }
