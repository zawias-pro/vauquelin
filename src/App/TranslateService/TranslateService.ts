import { from, of, Subscription } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { map, tap, concatMap, mergeMap, catchError, delay, count, share, scan, withLatestFrom } from 'rxjs/operators'
import { Provider } from '../../types/Provider'

export interface ITranslateService {
  translate: (text: string) => void
}

class TranslateService implements ITranslateService {
  // @ts-ignore
  public translate = (text: string, onFinish: any): void => {
    const word$ = from(text.split(' '))

    const request$ = word$.pipe(
      mergeMap(x => {
        console.log(`request$: start request ${x}...`)

        return of(`${x}: response received`).pipe(delay(Math.random() * 1000))
      }),
      share(),
    )

    const count$ = request$.pipe(count())

    request$.subscribe(x => {
      onFinish(x)

      return console.log('request$:', x)
    })

    count$.subscribe(x => console.log('count$:', x))

    const progress$ = count$.pipe(
      withLatestFrom(request$, (current) => current),
      map(a => a)
    )

    progress$.subscribe(x => console.log('progress$:', x))
  }
}

export { TranslateService }