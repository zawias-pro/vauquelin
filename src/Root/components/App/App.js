import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

import { TopBar } from './TopBar'
import { InputSection } from './InputSection'
import { OutputSection } from './OutputSection'
import { TranslateFormSection } from './TranslateFormSection'

class App extends Component {
  state = {
    inputJson: '',
    outputJson: '',
  }

  onInputChange = (event) => {
    this.setState({
      inputJson: event.target.value,
      outputJson: event.target.value,
    })
  }

  render() {
    return <div>
      <TopBar/>
      <div style={{ margin: 30 }}>
        <Grid container spacing={24}>
          <Grid item xs={5}>
            <InputSection value={this.state.inputJson} onChange={this.onInputChange} />
          </Grid>
          <Grid item xs={2}>
            <TranslateFormSection />
          </Grid>
          <Grid item xs={5}>
            <OutputSection value={this.state.outputJson}/>
          </Grid>
        </Grid>
      </div>
    </div>
  }
}

export { App }
