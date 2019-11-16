import React from 'react'
import Page from 'components/Page/Page'
import HomeHero from '../HomeHero/HomeHero'
import HomeUsps from '../HomeUsps/HomeUsps'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from 'selectors/user'
import * as Routes from 'constants/Routes'
import { Redirect } from 'react-router-dom'

const HomeView = () => {
  const isLoggedIn = useSelector(getIsLoggedIn)

  if (isLoggedIn) {
    return (
      <Redirect
        to={Routes.DASHBOARD}
      />
    )
  }

  return (
    <Page>
      <HomeHero />
      <HomeUsps />
    </Page>
  )
}

export default HomeView
