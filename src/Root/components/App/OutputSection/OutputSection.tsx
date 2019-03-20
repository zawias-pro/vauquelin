import * as React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import {ChangeEvent} from "react";

interface OutputSectionProps {
  value: string;
  onChange: (event: ChangeEvent) => void;
}

const OutputSection: React.FunctionComponent<OutputSectionProps> = ({
  value,
  onChange,
}) => (
  <Paper style={{ padding: 16 }}>
    <TextField
      label="Output JSON"
      multiline
      fullWidth
      onChange={onChange}
      margin="normal"
      variant="outlined"
      value={value}
    />
  </Paper>
)

export { OutputSection }
