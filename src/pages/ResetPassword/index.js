import React, { lazy } from 'react'
import MainRoute from 'components/MainRoute/MainRoute'
import * as Routes from 'constants/Routes'

const ResetPasswordView = lazy(() => import('./components/ResetPasswordView/ResetPasswordView'))

export default (
  <MainRoute
    exact
    path={Routes.RESET_PASSWORD}
    component={ResetPasswordView}
  />
)
