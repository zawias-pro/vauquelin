import * as React from 'react'
import Grid from '@material-ui/core/Grid'

import { isJSON } from './utils/isJSON'
import { TopBar } from './components/TopBar'
import { i18nInit } from './translations/i18nInit'
import { IProgress } from './interfaces/IProgress'
import { getProviderById } from './getProviderById'
import { InputSection } from './components/InputSection'
import { OutputSection } from './components/OutputSection'
import { ProgressModal } from './components/ProgressModal'
import { TranslateService } from './service/TranslateService'
import { TranslateFormSection } from './components/TranslateFormSection'
import { DEFAULT_PROVIDER, Provider } from '../configuration/providers/Provider'

export interface AppState {
  inputJson: string
  outputJson: string
  provider: Provider
  useCustomApiKey: boolean
  apiKey: string
  progress: IProgress | null,
}

class App extends React.Component<{}, AppState> {
  public state = {
    inputJson: '',
    outputJson: '',
    provider: DEFAULT_PROVIDER,
    useCustomApiKey: false,
    apiKey: '',
    progress: null,
  }

  constructor(props: {}) {
    super(props)

    i18nInit()
  }

  public componentDidMount(): void {
    const storedApiKey = localStorage.getItem(`vauquelin.${this.state.provider.id}.key`)

    if (storedApiKey) {
      this.setState({
        apiKey: storedApiKey,
      })
    }
  }

  public onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      inputJson: event.target.value,
    })
  }

  public providerOnChange = (event: React.ChangeEvent<{}>, value: string): void => {
    const newProvider = getProviderById(value)
    const storedApiKey = localStorage.getItem(`vauquelin.${newProvider!.id}.key`)

    this.setState({
      provider: newProvider!,
      apiKey: storedApiKey || '',
    })
  }

  public apiKeyOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newKey = event.target.value

    this.setState({
      useCustomApiKey: true,
      apiKey: newKey,
    }, () => {
      localStorage.setItem(`vauquelin.${this.state.provider.id}.key`, newKey)
    })
  }

  public useCustomApiKeyOnChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void => {
    this.setState({
      useCustomApiKey: checked,
    })
  }

  public onFinish = (response: string) => {
    this.setState({
      outputJson: response,
      progress: null,
    })
  }

  public progressOnChange = (progress: IProgress) => {
    this.setState({
      progress,
    })
  }

  public translateOnClick = () => {
    const createJSONFromString = (input: string) => JSON.stringify(
      {...input.split(/\r?\n|\r/g)},
      null,
      2,
    )

    this.setState(prevState => ({
      inputJson: !isJSON(prevState.inputJson)
        ? createJSONFromString(prevState.inputJson)
        : prevState.inputJson,
    }), () => {
      TranslateService.translate(
        this.state,
        this.onFinish,
        this.progressOnChange,
      )
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
        <ProgressModal progress={this.state.progress} />
      </>
    )
  }
}

export { App }
