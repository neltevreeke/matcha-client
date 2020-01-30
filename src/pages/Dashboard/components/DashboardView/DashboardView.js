import React, { useState, useEffect } from 'react'
import styles from './DashboardView.scss'
import Page from 'components/Page/Page'
import PotentialMatches from '../PotentialMatches/PotentialMatches'
import SelectedMatchProfile from '../../../../components/SelectedMatchProfile/SelectedMatchProfile'
import * as EventType from 'constants/EventType'
import { sendEvent } from '../../../../utils/sockets'

const DashboardView = () => {
  const [selectedMatch, setSelectedMatch] = useState(null)

  useEffect(() => {
    if (!selectedMatch) {
      return
    }

    sendEvent({
      type: EventType.EVENT_TYPE_PROFILE_VIEW,
      data: selectedMatch._id
    })
  }, [
    selectedMatch
  ])

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
