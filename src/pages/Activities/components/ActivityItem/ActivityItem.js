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
}) => {
  const user = useSelector(getUser)
  let text

  const myAction = userId._id !== user._id
  const profileView = type === ActivityType.ACTIVITY_TYPE_PROFILE_VIEW
  const connect = type === ActivityType.ACTIVITY_TYPE_CONNECT
  const disconnect = type === ActivityType.ACTIVITY_TYPE_DISCONNECT

  if (!myAction && profileView) {
    text = 'You viewed the profile of ' + targetUserId.firstName + ' ' + targetUserId.lastName
  } else if (myAction && profileView) {
    text = userId.firstName + ' ' + userId.lastName + ' viewed your profile'
  }

  if (!myAction && connect) {
    text = 'You connected ' + targetUserId.lastName + ' ' + targetUserId.lastName
  } else if (myAction && connect) {
    text = userId.firstName + ' ' + userId.lastName + ' connected you'
  }

  if (!myAction && disconnect) {
    text = 'You disconnected with ' + targetUserId.firstName + ' ' + targetUserId.lastName
  } else if (myAction && disconnect) {
    text = userId.firstName + ' ' + userId.lastName + ' disconnected with you'
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
