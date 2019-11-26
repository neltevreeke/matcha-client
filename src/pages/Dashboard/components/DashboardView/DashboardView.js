import React from 'react'
import styles from './DashboardView.scss'
import Page from 'components/Page/Page'
import PotentialMatches from '../PotentialMatches/PotentialMatches'

const DashboardView = () => {
  return (
    <Page>
      <div className={styles.component}>
        <PotentialMatches />
      </div>
    </Page>
  )
}

export default DashboardView
