import { from, of } from 'rxjs'
import { mergeMap, delay, map, scan, combineAll, share } from 'rxjs/operators'

import { IProgress } from '../../interfaces/IProgress'
import { JSONHashValuesService } from '../JSONHashValuesService'
import { TranslationObject } from '../../interfaces/ITranslationObject'

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
          delay(Math.random() * 3000),
        ),
      ),
      share(),
    )

    const response$ = item$.pipe(
      map(x => of(x)),
      combineAll(),
      map(x => JSON.stringify(x)),
    )

    const progress$ = item$.pipe(
      scan(
        (acc: IProgress, current: TranslationObject) => ({
          current,
          done: acc.done + 1,
          all: acc.all,
        }),
        {
          current: { key: '', original: '', translated: '' },
          done: 0,
          all: inputArray.length,
        },
      ),
    )

    progress$.subscribe(progressOnChange)
    response$.subscribe(onFinish)
  }
}

export { TranslateService }
