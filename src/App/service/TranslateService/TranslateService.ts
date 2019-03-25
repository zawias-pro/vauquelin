import { from, of } from 'rxjs'
import { mergeMap, delay, map, scan, combineAll, tap, share } from 'rxjs/operators'
import { JSONHashValuesService } from '../JSONHashValuesService'

export interface ITranslateService {
  translate: (text: string, onFinish: any) => void
}

class TranslateService implements ITranslateService {
  public translate = (text: string, onFinish: (response: string) => any): void => {
    const inputArray = new JSONHashValuesService(text).getHashValues()
    const item$ = from(inputArray).pipe(
      mergeMap(x => of({
          key: x.key,
          original: x.value,
          translated: `translated ${x.value}`,
      }).pipe(
          delay(Math.random() * 1000),
        ),
      ),
      share(),
    )

    const progress$ = item$.pipe(
      map(_ => 1),
      scan((acc: number) => acc + 1, 0),
      map(val => Math.ceil((val / inputArray.length) * 100)),
    )

    const response$ = item$.pipe(
      map(x => of(x)),
      combineAll(),
    )

    progress$.subscribe(x => console.log(`${x}%`))
    response$.subscribe(result => onFinish(JSON.stringify(result)))
  }
}

export { TranslateService }
