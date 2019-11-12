import React, { lazy } from 'react'
import * as Routes from 'constants/Routes'
import MainRoute from 'components/MainRoute/MainRoute'

const DashboardView = lazy(() => import('./components/DashboardView/DashboardView'))

export default (
  <MainRoute
    exact
    isProtected
    path={Routes.DASHBOARD}
    component={DashboardView}
  />
)
