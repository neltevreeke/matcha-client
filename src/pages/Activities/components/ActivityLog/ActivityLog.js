import React from 'react'
import styles from './ActivityLog.scss'
import ActivityItem from '../ActivityItem/ActivityItem'

const ActivityLog = ({
  activities
}) => {
  return (
    <div className={styles.component}>
      <p className={styles.title}>
        Your activity log
      </p>
      {activities.map((activity, index) => {
        return (
          <ActivityItem
            key={index}
            activity={activity}
          />
        )
      })}
    </div>
  )
}

export default ActivityLog
