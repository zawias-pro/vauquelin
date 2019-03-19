import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import { TopBar } from './TopBar'
import { InputSection } from './InputSection'
import { OutputSection } from './OutputSection'
import { TranslateForm } from './TranslateForm'

const App = () => <>
  <TopBar/>
  <div style={{ margin: 30 }}>
    <Grid container spacing={24}>
      <Grid item xs={5}>
        <InputSection/>
      </Grid>
      <Grid item xs={2}>
        <Paper style={{ padding: 16 }}>
          <TranslateForm/>
        </Paper>
      </Grid>
      <Grid item xs={5}>
        <OutputSection/>
      </Grid>
    </Grid>
  </div>
</>

export { App }
