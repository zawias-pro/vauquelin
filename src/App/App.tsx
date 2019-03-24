import * as React from 'react'
import Grid from '@material-ui/core/Grid'

import { TopBar } from './components/TopBar'
import { DEFAULT_PROVIDER } from '../config'
import { Provider } from './types/Provider'
import { i18nInit } from './translations/i18nInit'
import { getProviderById } from './getProviderById'
import { InputSection } from './components/InputSection'
import { OutputSection } from './components/OutputSection'
import { TranslateService } from './service/TranslateService'
import { TranslateFormSection } from './components/TranslateFormSection'

interface AppState {
  inputJson: string
  outputJson: string
  provider: Provider
  useCustomApiKey: boolean
  apiKey: string
}

class App extends React.Component<{}, AppState> {
  public state = {
    inputJson: 'a\nb\nc\nd',
    outputJson: '',
    provider: DEFAULT_PROVIDER,
    useCustomApiKey: false,
    apiKey: '',
  }

  private translator: TranslateService

  constructor(props: {}) {
    super(props)

    i18nInit()
    this.translator = new TranslateService()
  }

  public onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      inputJson: event.target.value,
    })
  }

  public providerOnChange = (event: React.ChangeEvent<{}>, value: string): void => {
    this.setState({
      provider: getProviderById(value),
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

  public translateOnClick = () => {
    new TranslateService().translate(this.state.inputJson, (response: string) => {
      this.setState({
        outputJson: response,
      })
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
                translateOnClick={this.translateOnClick}
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
