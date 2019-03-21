import * as React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

interface OutputSectionProps {
  value: string
}

const OutputSection: React.FunctionComponent<OutputSectionProps> = ({
  value,
}) => (
  <Paper style={{ padding: 16 }}>
    <TextField
      label="Output JSON"
      multiline
      fullWidth
      onChange={() => { return }}
      margin="normal"
      variant="outlined"
      value={value}
    />
  </Paper>
)

export { OutputSection }
