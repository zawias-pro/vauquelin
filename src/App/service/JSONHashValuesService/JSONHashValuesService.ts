import hasha from 'hasha'

import { IKeyValue } from '../../interfaces/IKeyValue'
import { objectToArrayOfStrings } from './objectToArrayOfStrings'

export class JSONHashValuesService {
  public static isJSON = (input: string) => {
    try {
      JSON.parse(input)

      return true
    } catch (e) {
      return false
    }
  }

  public static getHashValues = (input: string): IKeyValue[] => {
    const array = objectToArrayOfStrings(
      JSONHashValuesService.isJSON(input)
        ? JSON.parse(input)
        : {...input.split(JSONHashValuesService.NEWLINE_REGEXP)},
    )

    return array.map((item) => ({
      key: `h${hasha(item, { algorithm: 'md5' })}`,
      value: item,
    }))
  }

  private static NEWLINE_REGEXP: RegExp = /\r?\n|\r/g
}
