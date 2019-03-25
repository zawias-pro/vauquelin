import { from, of } from 'rxjs'
import { mergeMap, delay, map, scan, combineAll, share } from 'rxjs/operators'

import { JSONHashValuesService } from '../JSONHashValuesService'

interface TranslationObject {
  key: string
  original: string
  translated: string
}

interface IProgress {
  current: TranslationObject,
  done: number,
  all: number,
}

type TranslateMethod = (
  text: string,
  onFinish: (result: string) => any,
  progressOnChange?: (progress: IProgress) => any,
) => void

export interface ITranslateService {
  translate: TranslateMethod
}

class TranslateService implements ITranslateService {
  public translate: TranslateMethod = (text, onFinish, progressOnChange): void => {
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
      scan(
        (acc: IProgress, current: TranslationObject) => ({
          current,
          done: acc.done + 1,
          all: inputArray.length,
        }),
        {
          current: { key: '', original: '', translated: '' },
          done: 0,
          all: inputArray.length,
        },
      ),
    )

    const response$ = item$.pipe(
      map(x => of(x)),
      combineAll(),
    )

    progress$.subscribe(progressOnChange)
    response$.subscribe(result => onFinish(JSON.stringify(result)))
  }
}

export { TranslateService }
