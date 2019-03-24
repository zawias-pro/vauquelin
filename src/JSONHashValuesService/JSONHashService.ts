export class JSONHashValuesService {
  private input: string

  constructor(input: string) {
    this.input = input
  }

  public getHashValues: {} = () => {
    return {}
  }

  public isJSON = () => {
    try {
      JSON.parse(this.input)

      return true
    } catch (e) {
      return false
    }
  }
}
