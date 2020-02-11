import React from 'react'
import styles from './ActivityItem.scss'
import { useSelector } from 'react-redux'
import { getUser } from 'selectors/user'
import Avatar from '../../../../components/Avatar/Avatar'
import * as ActivityType from '../../../../constants/ActivityType'
import moment from 'moment'

const getText = (user, userId, type, targetUserId) => {
  const isOwner = userId._id !== user._id
  const profileView = type === ActivityType.ACTIVITY_TYPE_PROFILE_VIEW
  const connect = type === ActivityType.ACTIVITY_TYPE_CONNECT
  const disconnect = type === ActivityType.ACTIVITY_TYPE_DISCONNECT
  const match = type === ActivityType.ACTIVITY_TYPE_MATCH
  const unmatch = type === ActivityType.ACTIVITY_TYPE_UNMATCH
  const block = type === ActivityType.ACTIVITY_TYPE_BLOCK

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

  if (!isOwner && block) {
    return 'You blocked ' + targetUserId.firstName + ' ' + targetUserId.lastName
  } else if (isOwner && block) {
    return userId.firstName + ' ' + userId.lastName + ' blocked you'
  }
}

const ActivityItem = ({
  activity
}) => {
  const {
    userId,
    targetUserId,
    type,
    createdOn
  } = activity

  const mDate = moment.utc(createdOn)
  const user = useSelector(getUser)
  const text = getText(user, userId, type, targetUserId)
  const isOwner = userId._id !== user._id

  if (isOwner && type === ActivityType.ACTIVITY_TYPE_BLOCK) {
    return null
  }

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
      <div className={styles.info}>
        <div className={styles.activityText}>
          {text}
        </div>
        <div className={styles.activityDate}>
          {mDate.format('DD-MM-YYYY HH:mm')}
        </div>
      </div>
    </div>
  )
}

export default ActivityItem
