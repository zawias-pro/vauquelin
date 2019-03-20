import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { useTranslation } from 'react-i18next'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const TopBar = () => {
  const { t } = useTranslation()

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          {t('application.name')} - {t('application.description')}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export { TopBar }
