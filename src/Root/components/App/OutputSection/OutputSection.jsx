import React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

const OutputSection = ({
  value,
}) => (
  <Paper style={{ padding: 16 }}>
    <TextField
      label="Output JSON"
      multiline
      fullWidth
      value={value}
      margin="normal"
      variant="outlined"
    />
  </Paper>
)

export { OutputSection }
