import React, { lazy } from 'react'
import * as Routes from 'constants/Routes'
import MainRoute from 'components/MainRoute/MainRoute'

const HistoryView = lazy(() => import('./components/HistoryView/HistoryView'))

export default (
  <MainRoute
    exact
    isProtected
    path={Routes.HISTORY}
    component={HistoryView}
  />
)
