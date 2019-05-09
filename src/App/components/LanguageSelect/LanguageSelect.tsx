import React from 'react'
import Select from '@material-ui/core/Select'
import { useTranslation } from 'react-i18next'
import { FormControl } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'

const LanguageSelect: React.FunctionComponent = () => {
  const { t } = useTranslation()
  const [ currentLanguage, setCurrentLanguage ] = React.useState<string>('auto')

  return (
    <FormControl style={{ width: 300 }}>
      <InputLabel>{t('input.input-language')}</InputLabel>
      <Select
        value={currentLanguage}
        onChange={e => setCurrentLanguage(e.target.value)}
      >
        <MenuItem value="auto">{t('input.language.auto')}</MenuItem>
      </Select>
    </FormControl>
  )
}

export { LanguageSelect }
