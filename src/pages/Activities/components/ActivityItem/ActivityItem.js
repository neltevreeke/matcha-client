import React from 'react'
import styles from './ActivityItem.scss'
import { useSelector } from 'react-redux'
import { getUser } from 'selectors/user'
import Avatar from '../../../../components/Avatar/Avatar'
import * as ActivityType from '../../../../constants/ActivityType'

const getText = (user, userId, type, targetUserId) => {
  const isOwner = userId._id !== user._id
  const profileView = type === ActivityType.ACTIVITY_TYPE_PROFILE_VIEW
  const connect = type === ActivityType.ACTIVITY_TYPE_CONNECT
  const disconnect = type === ActivityType.ACTIVITY_TYPE_DISCONNECT
  const match = type === ActivityType.ACTIVITY_TYPE_MATCH
  const unmatch = type === ActivityType.ACTIVITY_TYPE_UNMATCH

  if (!isOwner && profileView) {
    return 'You viewed the profile of ' + targetUserId.firstName + ' ' + targetUserId.lastName
  } else if (isOwner && profileView) {
    return userId.firstName + ' ' + userId.lastName + ' viewed your profile'
  }

  if (!isOwner && connect) {
    return 'You connected ' + targetUserId.firstName + ' ' + targetUserId.lastName
  } else if (isOwner && connect) {
    return userId.firstName + ' ' + userId.lastName + ' connected you'
  }

  if (!isOwner && disconnect) {
    return 'You disconnected with ' + targetUserId.firstName + ' ' + targetUserId.lastName
  } else if (isOwner && disconnect) {
    return userId.firstName + ' ' + userId.lastName + ' disconnected with you'
  }

  if (!isOwner && match) {
    return 'You matched with ' + targetUserId.firstName + ' ' + targetUserId.lastName
  } else if (isOwner && match) {
    return userId.firstName + ' ' + userId.lastName + ' matched with you'
  }

  if (!isOwner && unmatch) {
    return 'You unmatched with ' + targetUserId.firstName + ' ' + targetUserId.lastName
  } else if (isOwner && unmatch) {
    return userId.firstName + ' ' + userId.lastName + ' unmatched with you'
  }
}

const ActivityItem = ({
  userId,
  targetUserId,
  type
}) => {
  const user = useSelector(getUser)
  const text = getText(user, userId, type, targetUserId)
  const isOwner = userId._id !== user._id

  return (
    <div
      className={isOwner ? styles.myActionContainer : styles.oppositeActionContainer}
    >
      <div className={styles.avatarContainer}>
        <Avatar
          user={userId}
          size={Avatar.SIZE_S}
        />
      </div>
      <p>{text}</p>
    </div>
  )
}

export default ActivityItem
