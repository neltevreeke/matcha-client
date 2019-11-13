import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { ModalProvider } from 'react-modal-hook'
import { TransitionGroup } from 'react-transition-group'

import Home from './Home'
import Dashboard from './Dashboard'

export default (
  <Router>
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
        </Switch>
      </Suspense>
    </ModalProvider>
  </Router>
)
