import React, { useState } from 'react'
import styles from './DashboardView.scss'
import Page from 'components/Page/Page'
import PotentialMatches from '../PotentialMatches/PotentialMatches'
import SelectedMatchProfile from '../../../../components/SelectedMatchProfile/SelectedMatchProfile'

const DashboardView = () => {
  const [selectedMatch, setSelectedMatch] = useState(null)

  return (
    <Page>
      <div className={styles.component}>
        <div className={styles.potentialMatchesList}>
          <PotentialMatches
            setSelectedMatch={setSelectedMatch}
            selectedMatch={selectedMatch}
          />
        </div>
        <div className={styles.selectedMatchProfile}>
          <SelectedMatchProfile
            selectedMatch={selectedMatch}
          />
        </div>
      </div>
    </Page>
  )
}

export default DashboardView
