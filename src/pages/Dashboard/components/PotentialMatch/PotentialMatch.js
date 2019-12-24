import React from 'react'
import styles from './PotentialMatch.scss'
import Avatar from '../../../../components/Avatar/Avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PotentialMatch = ({
  potentialMatch,
  onlineUsers,
  onClick,
  isConnected
}) => {
  const isOnline = onlineUsers.some(onlineUser => onlineUser._id === potentialMatch._id)

  return (
    <div
      onClick={onClick}
      className={styles.component}
    >
      <div className={styles.avatar}>
        <Avatar
          isOnline={isOnline}
          user={potentialMatch}
          size={Avatar.SIZE_M}
          isRounded={false}
        />
        {isConnected && (
          <FontAwesomeIcon
            className={styles.icon}
            icon='bolt'
          />
        )}
      </div>
    </div>
  )
}

export default PotentialMatch
