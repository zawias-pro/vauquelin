export interface Provider {
  id: 'dummy' | 'yandex' | 'google' | 'microsoft'
  name: string
  enabled: boolean
}

export const providers: Provider[] = [
  {
    id: 'dummy',
    name: 'Dummy',
    enabled: true,
  },
  {
    id: 'yandex',
    name: 'Yandex',
    enabled: true,
  },
  {
    id: 'google',
    name: 'Google',
    enabled: false,
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    enabled: false,
  },
]

export const DEFAULT_PROVIDER = providers[0]
