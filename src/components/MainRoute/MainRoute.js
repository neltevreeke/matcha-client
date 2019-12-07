import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import wrapRoute from 'utils/wrapRoute'
import { me } from 'actions/users'
import {
  getIsLoggedIn,
  getMeIsLoaded
} from '../../selectors/user'
import { Redirect } from 'react-router-dom'
import * as Routes from 'constants/Routes'
import PageSpinner from 'components/PageSpinner/PageSpinner'

const MainRoute = ({
  matchProps,
  component: Component,
  isProtected
}) => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(getIsLoggedIn)
  const isMeLoaded = useSelector(getMeIsLoaded)

  useEffect(() => {
    dispatch(me())
  }, [])

  if (!isMeLoaded) {
    <PageSpinner />
  }

  if (isProtected && !isLoggedIn) {
    return (
      <Redirect
        to={Routes.HOME}
        exact
      />
    )
  }

  return (
    <Component {...matchProps} />
  )
}

export default wrapRoute(MainRoute)
