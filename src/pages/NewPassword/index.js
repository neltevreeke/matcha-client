import React, { lazy } from 'react'
import MainRoute from 'components/MainRoute/MainRoute'
import * as Routes from 'constants/Routes'

const NewPasswordView = lazy(() => import('./components/NewPasswordView/NewPasswordView'))

export default (
  <MainRoute
    exact
    path={Routes.NEW_PASSWORD}
    component={NewPasswordView}
  />
)
