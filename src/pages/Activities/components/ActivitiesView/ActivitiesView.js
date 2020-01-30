import React from 'react'
import styles from './ActivitiesView.scss'
import Page from 'components/Page/Page'
import ActivityLog from '../AcvitiyLog/ActivityLog'

const Activities = () => {
  return (
    <Page>
      <div className={styles.component}>
        <ActivityLog />
      </div>
    </Page>
  )
}

export default Activities
