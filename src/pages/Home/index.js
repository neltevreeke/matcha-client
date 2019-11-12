import React, { lazy } from 'react'
import MainRoute from 'components/MainRoute/MainRoute'
import * as Routes from 'constants/Routes'

const HomeView = lazy(() => import('./components/HomeView/HomeView'))

export default (
  <MainRoute
    exact
    path={Routes.HOME}
    component={HomeView}
  />
)
