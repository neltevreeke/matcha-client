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
  const match = type === ActivityType.ACTIVITY_TYPE_MATCH
  const unmatch = type === ActivityType.ACTIVITY_TYPE_UNMATCH

  if (!myAction && profileView) {
    text = 'You viewed the profile of ' + targetUserId.firstName + ' ' + targetUserId.lastName
  } else if (myAction && profileView) {
    text = userId.firstName + ' ' + userId.lastName + ' viewed your profile'
  }

  if (!myAction && connect) {
    text = 'You connected ' + targetUserId.firstName + ' ' + targetUserId.lastName
  } else if (myAction && connect) {
    text = userId.firstName + ' ' + userId.lastName + ' connected you'
  }

  if (!myAction && disconnect) {
    text = 'You disconnected with ' + targetUserId.firstName + ' ' + targetUserId.lastName
  } else if (myAction && disconnect) {
    text = userId.firstName + ' ' + userId.lastName + ' disconnected with you'
  }

  if (!myAction && match) {
    text = 'You matched with ' + targetUserId.firstName + ' ' + targetUserId.lastName
  } else if (myAction && match) {
    text = userId.firstName + ' ' + userId.lastName + ' matched with you'
  }

  if (!myAction && unmatch) {
    text = 'You unmatched with ' + targetUserId.firstName + ' ' + targetUserId.lastName
  } else if (myAction && unmatch) {
    text = userId.firstName + ' ' + userId.lastName + ' unmatched with you'
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
