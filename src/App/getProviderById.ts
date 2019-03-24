import { Provider, providers } from './types/Provider'

const getProviderById = (id: string): Provider => (
  Object.values(providers).find(provider => (provider.id === id)) as Provider
)

export { getProviderById }
