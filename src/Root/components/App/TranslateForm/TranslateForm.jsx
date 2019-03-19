import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

const TranslateForm = () => (
  <>
    <div style={{ textAlign: 'center', marginBottom: 24 }}>
      <Button variant="contained" color="primary">
        Translate
      </Button>
    </div>
    <FormControl>
      <FormLabel component="legend">Translation provider</FormLabel>
      <RadioGroup
        aria-label="Translation provider"
        value="yandex"
        onChange={() => {
        }}
      >
        <FormControlLabel value="yandex" control={<Radio/>} label="Yandex"/>
        <FormControlLabel value="bing" control={<Radio/>} label="Bing"/>
        <FormControlLabel value="google" control={<Radio/>} label="Google"/>
      </RadioGroup>
      <FormControlLabel
        control={
          <Switch
            checked={false}
            onChange={() => {
            }}
          />
        }
        label="Use custom API key"
      />
      <TextField
        label="Custom API key"
        fullWidth
        onChange={() => {
        }}
        margin="normal"
      />
    </FormControl>
  </>
)

export { TranslateForm }
