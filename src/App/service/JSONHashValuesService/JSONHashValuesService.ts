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

  private NEWLINE_REGEXP: RegExp = /\r?\n|\r/g
  private input: string

  constructor(input: string) {
    this.input = input
  }

  public getHashValues = (): IKeyValue[] => {
    const array = objectToArrayOfStrings(
      JSONHashValuesService.isJSON(this.input)
        ? JSON.parse(this.input)
        : {...this.input.split(this.NEWLINE_REGEXP)},
    )

    return array.map((item) => ({
      key: `h${hasha(item, { algorithm: 'md5' })}`,
      value: item,
    }))
  }
}
