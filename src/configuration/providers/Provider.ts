export interface Provider {
  id: 'dummy' | 'yandex' | 'google' | 'microsoft'
  name: string
  enabled: boolean
}

export const providers: Provider[] = [
  {
    id: 'dummy',
    name: 'Dummy',
    enabled: process.env.NODE_ENV === 'development',
  }, {
    id: 'yandex',
    name: 'Yandex',
    enabled: true,
  }, {
    id: 'microsoft',
    name: 'Microsoft',
    enabled: true,
  }, {
    id: 'google',
    name: 'Google',
    enabled: false,
  },
]

export const DEFAULT_PROVIDER = providers[0].enabled ? providers[0] : providers[1]
