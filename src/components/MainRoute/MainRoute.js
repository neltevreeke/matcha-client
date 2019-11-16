import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import wrapRoute from 'utils/wrapRoute'
import useMe from 'hooks/useMe'
import { Redirect } from 'react-router-dom'
import * as Routes from 'constants/Routes'
import { setUser } from '../../actions/users'

const MainRoute = ({
  matchProps,
  component: Component,
  isProtected
}) => {
  const {
    data: user,
    isLoading
  } = useMe()

  const dispatch = useDispatch()

  useEffect(() => {
    if (!user) {
      return
    }

    dispatch(setUser(user))
  }, [
    user
  ])

  if (isLoading) {
    return null
  }

  if (isProtected && !user) {
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
