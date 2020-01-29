import React from 'react'
import styles from './ToastifyBody.scss'
import * as EventType from 'constants/EventType'
import Avatar from '../Avatar/Avatar'
import { loadMatches } from '../../actions/matches'
import { getConnectedMatches } from 'actions/users'

const ToastifyBody = ({ data, type, dispatch }) => {
  let notificationText

  const {
    firstName,
    lastName
  } = data

  if (type === EventType.EVENT_TYPE_PROFILE_VIEW) {
    notificationText = firstName + ' ' + ' ' + lastName + ' viewed your profile'
  } else if (type === EventType.EVENT_TYPE_CONNECT) {
    notificationText = firstName + ' ' + lastName + ' connected you'
  } else if (type === EventType.EVENT_TYPE_MATCH) {
    notificationText = 'You have a new match with ' + firstName + ' ' + lastName

    dispatch(loadMatches())
  } else if (type === EventType.EVENT_TYPE_UNMATCH) {
    notificationText = firstName + ' ' + lastName + ' unmatched you'

    dispatch(loadMatches())
    dispatch(getConnectedMatches())
  } else if (type === EventType.EVENT_TYPE_MESSAGE) {
    notificationText = firstName + ' ' + lastName + ' has send you a new message'
  }

  return (
    <div className={styles.component}>
      <div className={styles.avatarContainer}>
        <Avatar
          user={data}
          size={Avatar.SIZE_S}
          backgroundClassName={styles.avatar}
        />
      </div>
      <p className={styles.notificationText}>{notificationText}</p>
    </div>
  )
}

export default ToastifyBody
