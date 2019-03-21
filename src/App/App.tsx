import * as React from 'react'
import Grid from '@material-ui/core/Grid'

import { TopBar } from './TopBar'
import { DEFAULT_PROVIDER } from '../config'
import { Provider } from '../types/Provider'
import { InputSection } from './InputSection'
import { OutputSection } from './OutputSection'
import { i18nInit } from '../translations/i18nInit'
import { TranslateFormSection } from './TranslateFormSection'

interface AppState {
  inputJson: string
  outputJson: string
  provider: Provider
  useCustomApiKey: boolean
  apiKey: string
}

class App extends React.Component<{}, AppState> {
  public state = {
    inputJson: '',
    outputJson: '',
    provider: DEFAULT_PROVIDER,
    useCustomApiKey: false,
    apiKey: '',
  }

  constructor(props: {}) {
    super(props)

    i18nInit()
  }

  public onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      inputJson: event.target.value,
      outputJson: event.target.value,
    })
  }

  public providerOnChange = (event: React.ChangeEvent<{}>): void => {
    this.setState({
      // @ts-ignore
      provider: event.target.value as Provider,
    })
  }

  public apiKeyOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      useCustomApiKey: true,
      apiKey: event.target.value,
    })
  }

  public useCustomApiKeyOnChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void => {
    this.setState({
      useCustomApiKey: checked,
    })
  }

  public render() {
    return (
      <>
        <TopBar/>
        <div style={{margin: 30}}>
          <Grid container spacing={24}>
            <Grid item xs={5}>
              <InputSection
                value={this.state.inputJson}
                onChange={this.onInputChange}
              />
            </Grid>
            <Grid item xs={2}>
              <TranslateFormSection
                provider={this.state.provider}
                providerOnChange={this.providerOnChange}
                apiKey={this.state.apiKey}
                apiKeyOnChange={this.apiKeyOnChange}
                useCustomApiKey={this.state.useCustomApiKey}
                useCustomApiKeyOnChange={this.useCustomApiKeyOnChange}
              />
            </Grid>
            <Grid item xs={5}>
              <OutputSection value={this.state.outputJson}/>
            </Grid>
          </Grid>
        </div>
      </>
    )
  }
}

export { App }
