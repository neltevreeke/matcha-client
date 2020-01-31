import React, { useEffect } from 'react'
import styles from './ActivitiesView.scss'
import Page from 'components/Page/Page'
import ActivityLog from '../ActivityLog/ActivityLog'
import { getActivitiesList, getActivitiesIsLoading } from 'selectors/activities'
import { useDispatch, useSelector } from 'react-redux'
import PageSpinner from 'components/PageSpinner/PageSpinner'
import { getActivities } from 'actions/activity'

const Activities = () => {
  const activities = useSelector(getActivitiesList)
  const isLoading = useSelector(getActivitiesIsLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getActivities({
      shouldMarkAsSeen: true
    }))
  }, [])

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
