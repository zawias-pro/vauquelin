export interface Provider {
  id: 'yandex' | 'google' | 'microsoft'
  name: string
}

export const providers: ({ [key: string]: Provider }) = {
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
