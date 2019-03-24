import { forkJoin, from, of } from 'rxjs'
import { mergeMap, delay, tap, scan, combineAll } from 'rxjs/operators'
import { JSONHashValuesService } from '../JSONHashValuesService'

export interface ITranslateService {
  translate: (text: string, onFinish: any) => void
}

class TranslateService implements ITranslateService {
  public translate = (text: string, onFinish: (response: string) => any): void => {
    const inputArray = new JSONHashValuesService(text).getHashValues()
    const item$ = from(inputArray).pipe(
      mergeMap(x => {
        console.log(`request$: start request ${x.value}...`)

        return of(`translated ${x.value}`).pipe(
          delay(Math.random() * 1000),
        )
      }),
    )

    const request$ = item$.pipe(
      combineAll(),
    )

    const progress$ = item$.pipe(
      // @ts-ignore
      scan((a, b) => console.log({ a, b })),
    )

    request$.subscribe((x: any) => {
      onFinish(x)
    })
    // progress$.subscribe(
    //   (count: number) => console.log(`${count}/${inputArray.length} finished`),
    // )
    progress$.subscribe()
  }
}

export { TranslateService }
