import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { useTranslation } from 'react-i18next'

const App = () => {
  const { t } = useTranslation()

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            {t('application.name')} - {t('application.description')}
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ margin: 30 }}>
        <Grid container spacing={24}>
          <Grid item xs={5}>
            <Paper style={{ padding: 16 }}>
              <TextField
                label="Input JSON"
                multiline
                fullWidth
                onChange={() => {
                }}
                margin="normal"
                variant="outlined"
              />
            </Paper>
          </Grid>
          <Grid item xs={2}>
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
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper style={{ padding: 16 }}>
              <TextField
                label="Output JSON"
                multiline
                fullWidth
                onChange={() => {
                }}
                margin="normal"
                variant="outlined"
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export { App }
