import hasha from 'hasha'
import _uniqBy from 'lodash/uniqBy'

import { IHashValue } from '../../interfaces/IHashValue'
import { objectToArrayOfStrings } from './objectToArrayOfStrings'

export class JSONHashValuesService {
  public static getHashValues = (input: string): IHashValue[] => {
    const array = objectToArrayOfStrings(JSON.parse(input))

    const hashValuePairs = array.map((item) => ({
      hash: hasha(item, { algorithm: 'md5' }),
      value: item,
    }))

    return _uniqBy(hashValuePairs, 'hash')
  }
}
