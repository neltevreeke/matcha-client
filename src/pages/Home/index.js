import React, { lazy } from 'react'
import { Route } from 'react-router-dom'
import * as Routes from 'constants/Routes'

const HomeView = lazy(() => import('./components/HomeView/HomeView'))

export default (
  <Route
    exact
    path={Routes.HOME}
    component={HomeView}
  />
)
