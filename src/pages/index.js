import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { ModalProvider } from 'react-modal-hook'
import { TransitionGroup } from 'react-transition-group'

import Home from './Home'

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
        </Switch>
      </Suspense>
    </ModalProvider>
  </Router>
)
