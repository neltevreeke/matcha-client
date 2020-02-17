import React, { lazy } from 'react'
import MainRoute from 'components/MainRoute/MainRoute'
import * as Routes from 'constants/Routes'

const VerifyAccountView = lazy(() => import('./components/VerifyAccountView/VerifyAccountView'))

export default (
  <MainRoute
    path={Routes.VERIFY_ACCOUNT}
    component={VerifyAccountView}
  />
)
