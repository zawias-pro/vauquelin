import * as React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import {ChangeEvent} from "react";

interface InputSectionProps {
  value: string;
  onChange: (event: ChangeEvent) => void;
}

const InputSection: React.FunctionComponent<InputSectionProps> = ({
  value,
  onChange,
}) => (
  <Paper style={{ padding: 16 }}>
    <TextField
      label="Input JSON"
      multiline
      fullWidth
      onChange={onChange}
      margin="normal"
      variant="outlined"
      value={value}
    />
  </Paper>
)

export { InputSection }
