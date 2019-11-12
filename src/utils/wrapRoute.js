import React from 'react'
import { Route } from 'react-router-dom'

const wrapRoute = Component => ({
  path,
  exact,
  ...props
}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={matchProps => (
        <Component
          matchProps={matchProps}
          {...props}
        />
      )}
    />
  )
}

export default wrapRoute
