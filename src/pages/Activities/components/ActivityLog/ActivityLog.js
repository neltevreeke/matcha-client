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
        const {
          userId,
          targetUserId,
          type,
          createdOn
        } = activity

        return (
          <ActivityItem
            key={index}
            userId={userId}
            targetUserId={targetUserId}
            type={type}
            date={createdOn}
          />
        )
      })}
    </div>
  )
}

export default ActivityLog
