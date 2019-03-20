import React from 'react'
import PropTypes from 'prop-types'
import Radio from '@material-ui/core/Radio'
import Paper from '@material-ui/core/Paper'
import Switch from '@material-ui/core/Switch'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'

class TranslateFormSection extends React.Component {
  render() {
    const { provider, providerOnChange, apiKey, apiKeyOnChange } = this.props

    return (
      <Paper style={{ padding: 16 }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <Button variant="contained" color="primary">
              Translate
          </Button>
        </div>
        <FormControl>
          <FormLabel component="legend">Translation provider</FormLabel>
          <RadioGroup
            aria-label="Translation provider"
            value={provider}
            onChange={providerOnChange}
          >
            <FormControlLabel value="yandex" control={<Radio/>}
              label="Yandex"/>
            <FormControlLabel value="bing" control={<Radio/>} label="Bing"/>
            <FormControlLabel value="google" control={<Radio/>}
              label="Google"/>
          </RadioGroup>
          <FormControlLabel
            control={
              <Switch
                checked={false}
                onChange={() => {}}
              />
            }
            label="Use custom API key"
          />
          <TextField
            label="Custom API key"
            fullWidth
            margin="normal"
            value={apiKey}
            onChange={apiKeyOnChange}
          />
        </FormControl>
      </Paper>
    )
  }
}

TranslateFormSection.propTypes = {
  provider: PropTypes.any,
  providerOnChange: PropTypes.any,
}

export { TranslateFormSection }
