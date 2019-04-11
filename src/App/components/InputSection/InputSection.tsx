import * as React from 'react'
import Paper from '@material-ui/core/Paper'
import { useTranslation } from 'react-i18next'
import TextField from '@material-ui/core/TextField'

interface InputSectionProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputSection: React.FunctionComponent<InputSectionProps> = ({
  value,
  onChange,
}) => {
  const { t } = useTranslation()

  return (
    <Paper style={{ padding: 16 }}>
      <TextField
        label={t('input.input-json')}
        multiline
        fullWidth
        onChange={onChange}
        margin="normal"
        variant="outlined"
        value={value}
      />
    </Paper>
  )
}

export { InputSection }
