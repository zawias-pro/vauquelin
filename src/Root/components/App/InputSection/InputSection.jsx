import React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

const InputSection = () => (
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
)

export { InputSection }
