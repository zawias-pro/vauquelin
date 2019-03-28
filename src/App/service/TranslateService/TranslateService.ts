import { from, of } from 'rxjs'
import { mergeMap, map, scan, combineAll, share } from 'rxjs/operators'

import { AppState } from '../../App'
import { translateRequest } from './translateRequest'
import { IProgress } from '../../interfaces/IProgress'
import { JSONHashValuesService } from '../JSONHashValuesService'
import { ITranslationObject } from '../../interfaces/ITranslationObject'

type TranslateMethod = (
  state: AppState,
  onFinish: (result: string) => any,
  progressOnChange?: (progress: IProgress) => any,
) => void

class TranslateService {
  public static translate: TranslateMethod = (state, onFinish, progressOnChange): void => {
    const inputArray = JSONHashValuesService.getHashValues(state.inputJson)

    const item$ = from(inputArray)

    const request$ = item$.pipe(
      mergeMap(x => translateRequest(x, state)),
      share(),
    )

    const result$ = request$.pipe(
      map(x => of(x)),
      combineAll(),
      map(x => JSON.stringify(x)),
    )

    const progress$ = request$.pipe(
      scan(
        (acc: IProgress, current: ITranslationObject) => ({
          current,
          done: acc.done + 1,
          all: acc.all,
        }),
        {
          current: { hash: '', original: '', translated: '' },
          done: 0,
          all: inputArray.length,
        },
      ),
    )

    progress$.subscribe(progressOnChange)
    result$.subscribe(onFinish)
  }
}

export { TranslateService }
