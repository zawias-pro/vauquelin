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
    const inputArray = new JSONHashValuesService(state.inputJson).getHashValues()
    const item$ = from(inputArray).pipe(
      mergeMap(x => translateRequest(x, state)),
      share(),
    )

    const response$ = item$.pipe(
      map(x => of(x)),
      combineAll(),
      map(x => JSON.stringify(x)),
    )

    const progress$ = item$.pipe(
      scan(
        (acc: IProgress, current: ITranslationObject) => ({
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
