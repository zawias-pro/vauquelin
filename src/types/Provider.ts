export interface Provider {
  id: 'dummy' | 'yandex' | 'google' | 'microsoft'
  name: string
}

export const providers: ({ [key: string]: Provider }) = {
  dummy: {
    id: 'dummy',
    name: 'Dummy',
  },
  yandex: {
    id: 'yandex',
    name: 'Yandex',
  },
  google: {
    id: 'google',
    name: 'Google',
  },
  microsoft: {
    id: 'microsoft',
    name: 'Microsoft',
  },
}
