import React, { lazy } from 'react'
import MainRoute from 'components/MainRoute/MainRoute'
import * as Routes from 'constants/Routes'

const MatchesView = lazy(() => import('./components/MatchesView/MatchesView'))

export default (
  <MainRoute
    isProtected
    path={Routes.MATCHES}
    component={MatchesView}
  />
)
