import React from 'react'
import styles from './ActivityLog.scss'
import ActivityItem from '../ActivityItem/ActivityItem'

const ActivityLog = () => {
  return (
    <div className={styles.component}>
      <p className={styles.title}>Your activity log</p>
      <ActivityItem />
    </div>
  )
}

export default ActivityLog
