import React from 'react'
import styles from './HistoryView.scss'
import Page from 'components/Page/Page'
import ActionList from '../ActionList/ActionList'
import NotificationList from '../NotificationList/NotificationList'

const HistoryView = () => {
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

export default HistoryView
