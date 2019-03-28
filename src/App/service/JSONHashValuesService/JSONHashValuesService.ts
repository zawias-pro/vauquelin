import hasha from 'hasha'
import _uniqBy from 'lodash/uniqBy'

import { IKeyValue } from '../../interfaces/IKeyValue'
import { objectToArrayOfStrings } from './objectToArrayOfStrings'

export class JSONHashValuesService {
  public static getHashValues = (input: string): IKeyValue[] => {
    const array = objectToArrayOfStrings(JSON.parse(input))

    const keyValuePairs = array.map((item) => ({
      key: hasha(item, { algorithm: 'md5' }),
      value: item,
    }))

    return _uniqBy(keyValuePairs, 'key')
  }
}
