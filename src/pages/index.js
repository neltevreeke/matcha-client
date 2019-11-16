import React, { Suspense } from 'react'
import { Switch } from 'react-router-dom'
import { ModalProvider } from 'react-modal-hook'
import { TransitionGroup } from 'react-transition-group'
import { ConnectedRouter } from 'connected-react-router'
import { history } from '../utils/configureStore'

import Home from './Home'
import Dashboard from './Dashboard'
import Settings from './Settings'

export default (
  <ConnectedRouter history={history}>
    <ModalProvider container={TransitionGroup}>
      <Suspense
        fallback={(
          <span>
            Loading...
          </span>
        )}
      >
        <Switch>
          {Home}
          {Dashboard}
          {Settings}
        </Switch>
      </Suspense>
    </ModalProvider>
  </ConnectedRouter>
)
