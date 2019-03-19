import React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

const OutputSection = () => (
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
)

export { OutputSection }
