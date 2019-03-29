import { Provider, providers } from '../configuration/providers/Provider'

const getProviderById = (id: string): Provider | null => (
  providers.find(provider => provider.id === id) || null
)

export { getProviderById }
