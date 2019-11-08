import React from 'react'
// import styles from './HomeView.scss'
import Page from 'components/Page/Page'
import HomeHero from '../HomeHero/HomeHero'
import HomeUsps from '../HomeUsps/HomeUsps'

const HomeView = () => {
  return (
    <Page>
      <HomeHero />
      <HomeUsps />
    </Page>
  )
}

export default HomeView
