import * as React from 'react'
import { Button } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import { useTranslation } from 'react-i18next'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const TopBar: React.FunctionComponent = () => {
  const { t } = useTranslation()

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
          {t('application.name')} - {t('application.description')}
        </Typography>
        <Button color="inherit">
          {t('top-bar.translate')}
        </Button>
        <Button color="inherit">
          {t('top-bar.about')}
        </Button>
        <Button color="inherit">
          {t('top-bar.how-to-use')}
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export { TopBar }
