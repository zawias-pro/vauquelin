import { from, of } from 'rxjs'
import { mergeMap, map, scan, combineAll, share } from 'rxjs/operators'

import { AppState } from '../../App'
import { translateRequest } from './translateRequest'
import { IProgress } from '../../interfaces/IProgress'
import { objectToArrayOfStrings } from './objectToArrayOfStrings'
import { ITranslationObject } from '../../interfaces/ITranslationObject'
import { replaceValuesWithTranslations } from "./replaceValuesWithTranslations/replaceValuesWithTranslations";

type TranslateMethodType = (
  state: AppState,
  onFinish: (result: string) => any,
  progressOnChange?: (progress: IProgress) => any,
) => void

class TranslateService {
  public static translate: TranslateMethodType = (state, onFinish, progressOnChange): void => {
    const inputArray = objectToArrayOfStrings(JSON.parse(state.inputJson))

    const item$ = from(inputArray)

    const request$ = item$.pipe(
      mergeMap(item => translateRequest(item, state)),
      share(),
    )

    const result$ = request$.pipe(
      map(response => of(response)),
      combineAll(),
      map((translations: ITranslationObject[]) => replaceValuesWithTranslations(state.inputJson, translations)),
    )

    const progress$ = request$.pipe(
      scan(
        (acc: IProgress, current: ITranslationObject) => ({
          current,
          done: acc.done + 1,
          all: acc.all,
        }),
        {
          current: { original: '', translated: '' },
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
