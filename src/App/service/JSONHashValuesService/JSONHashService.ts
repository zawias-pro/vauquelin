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

  private NEWLINE_REGEXP: RegExp = /\n/
  private input: string

  constructor(input: string) {
    this.input = input
  }

  public getHashValues = (): { [item: string]: string } => {
    const array = objectToArrayOfStrings(
      JSONHashValuesService.isJSON(this.input)
        ? JSON.parse(this.input)
        : {...this.input.split(this.NEWLINE_REGEXP)},
    )

    const result = array.map((item) => ({
      key: item,
      value: item,
    }))

    return Object.assign(
      {},
      ...result.map(item => ({
        [item.key]: item.value,
      })),
    )
  }
}
