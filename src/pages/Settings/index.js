import React, { lazy } from 'react'
import MainRoute from 'components/MainRoute/MainRoute'
import * as Routes from 'constants/Routes'

const SettingsView = lazy(() => import('./components/SettingsView/SettingsView'))

export default (
  <MainRoute
    isProtected
    path={Routes.SETTINGS}
    component={SettingsView}
  />
)
