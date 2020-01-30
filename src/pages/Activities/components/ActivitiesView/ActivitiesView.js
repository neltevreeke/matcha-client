import React from 'react'
import styles from './ActivitiesView.scss'
import Page from 'components/Page/Page'
import ActivityLog from '../AcvitiyLog/ActivityLog'
import { getActivities, getActivitiesIsLoading } from 'selectors/activities'
import { useSelector } from 'react-redux'
import PageSpinner from 'components/PageSpinner/PageSpinner'

const Activities = () => {
  const activities = useSelector(getActivities)
  const isLoading = useSelector(getActivitiesIsLoading)

  if (isLoading) {
    return (
      <PageSpinner />
    )
  }

  return (
    <Page>
      <div className={styles.component}>
        <ActivityLog
          activities={activities}
        />
      </div>
    </Page>
  )
}

export default Activities
