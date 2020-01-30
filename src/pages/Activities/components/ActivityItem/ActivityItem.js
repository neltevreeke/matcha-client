import React from 'react'
import styles from './ActivityItem.scss'
import { useSelector } from 'react-redux'
import { getUser } from 'selectors/user'
import Avatar from '../../../../components/Avatar/Avatar'
import * as ActivityType from '../../../../constants/ActivityType'

const ActivityItem = ({
  userId,
  targetUserId,
  type
  // date
}) => {
  const user = useSelector(getUser)
  let text

  const myAction = userId._id === user._id

  if (myAction && type === ActivityType.ACTIVITY_TYPE_PROFILE_VIEW) {
    text = 'You viewed the profile of ' + targetUserId.firstName + ' ' + targetUserId.lastName
  } else if (!myAction && type === ActivityType.ACTIVITY_TYPE_PROFILE_VIEW) {
    text = userId.firstName + ' ' + userId.lastName + ' viewed your profile'
  }

  return (
    (myAction ? (
      <div className={styles.myActionContainer}>
        <div className={styles.avatarContainer}>
          <Avatar
            user={userId}
            size={Avatar.SIZE_S}
          />
        </div>
        <p>{text}</p>
      </div>
    ) : (
      <div className={styles.oppositeActionContainer}>
        <div className={styles.avatarContainer}>
          <Avatar
            user={userId}
            size={Avatar.SIZE_S}
          />
        </div>
        <p>{text}</p>
      </div>
    ))
  )
}

export default ActivityItem
