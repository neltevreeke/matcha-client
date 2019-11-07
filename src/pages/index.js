import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import Home from './Home'

export default (
  <Router>
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
  </Router>
)
