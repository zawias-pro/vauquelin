import * as React from 'react'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import { useTranslation } from 'react-i18next'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { Provider } from '../../../configuration/providers/Provider'

interface OutputSectionProps {
  value: string
  provider: Provider
}

const OutputSection: React.FunctionComponent<OutputSectionProps> = ({
  value,
  provider,
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
      {provider.id === 'yandex' && value && (
        <Typography variant="body1">
          Powered by Yandex.Translate:&nbsp;
          <Link
            href="http://translate.yandex.com/"
            target="_blank"
          >
            translate.yandex.com
          </Link>
        </Typography>
      )}
    </Paper>
  )
}

export { OutputSection }
