import React, { lazy } from 'react'
import { Route } from 'react-router-dom'
import * as Routes from 'constants/Routes'

const DashboardView = lazy(() => import('./components/DashboardView/DashboardView'))

export default (
  <Route
    exact
    path={Routes.DASHBOARD}
    component={DashboardView}
  />
)
