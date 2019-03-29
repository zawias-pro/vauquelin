import * as React from 'react'
import Radio from '@material-ui/core/Radio'
import Paper from '@material-ui/core/Paper'
import Switch from '@material-ui/core/Switch'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { Provider, providers } from '../../../configuration/providers/Provider'

interface TranslateFormSectionProps {
  provider: Provider
  providerOnChange: (event: React.ChangeEvent<{}>, value: string) => void
  apiKey: string
  apiKeyOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  useCustomApiKey: boolean
  useCustomApiKeyOnChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
  translateOnClick: () => void
}

const TranslateFormSection: React.FunctionComponent<TranslateFormSectionProps> = ({
  provider,
  providerOnChange,
  apiKey,
  apiKeyOnChange,
  useCustomApiKey,
  useCustomApiKeyOnChange,
  translateOnClick,
}) => {
  const useCustomApiKeySwitcher = <Switch checked={useCustomApiKey} onChange={useCustomApiKeyOnChange}/>

  return (
    <Paper style={{padding: 16}}>
      <div style={{textAlign: 'center', marginBottom: 24}}>
        <Button
          variant="contained"
          color="primary"
          onClick={translateOnClick}
        >
          Translate
        </Button>
      </div>
      <FormControl>
        <FormLabel component="data">Translation provider</FormLabel>
        <RadioGroup
          aria-label="Translation provider"
          value={provider.id}
          onChange={providerOnChange}
        >
          {providers.map((p: Provider) => (
            <FormControlLabel
              key={p.id}
              value={p.id}
              control={<Radio/>}
              label={p.name}
              disabled={!p.enabled}
            />
          ))}
        </RadioGroup>
        <FormControlLabel
          control={useCustomApiKeySwitcher}
          label="Use custom API key"
        />
        <TextField
          label="Custom API key"
          fullWidth
          margin="normal"
          value={apiKey}
          onChange={apiKeyOnChange}
          disabled={!useCustomApiKey}
        />
      </FormControl>
    </Paper>
  )
}

export { TranslateFormSection }
