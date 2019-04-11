import * as React from 'react'
import Paper from '@material-ui/core/Paper'
import { useTranslation } from 'react-i18next'
import TextField from '@material-ui/core/TextField'

interface OutputSectionProps {
  value: string
}

const OutputSection: React.FunctionComponent<OutputSectionProps> = ({
  value,
}) => {
  const { t } = useTranslation()

  return (
    <Paper style={{padding: 16}}>
      <TextField
        label={t('output.output-json')}
        multiline
        fullWidth
        onChange={() => { return }}
        margin="normal"
        variant="outlined"
        value={value}
        disabled={!value}
      />
    </Paper>
  )
}

export { OutputSection }
