import React from 'react'
import styles from './ActivitiesView.scss'
import Page from 'components/Page/Page'
import ActionList from '../ActionList/ActionList'
import NotificationList from '../NotificationList/NotificationList'

const Activities = () => {
  // get notifications

  // get your actions

  return (
    <Page>
      <div className={styles.component}>
        <NotificationList />
        <ActionList />
      </div>
    </Page>
  )
}

export default Activities
