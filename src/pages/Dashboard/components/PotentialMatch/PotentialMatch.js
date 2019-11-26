import React from 'react'
import styles from './PotentialMatch.scss'
import Avatar from '../../../../components/Avatar/Avatar'

const PotentialMatch = ({
  potentialMatch,
  onlineUsers
}) => {
  const isOnline = onlineUsers.some(onlineUser => onlineUser._id === potentialMatch._id)

  return (
    <div className={styles.component}>
      <div className={styles.avatar}>
        <Avatar
          isOnline={isOnline}
          user={potentialMatch}
          size={Avatar.SIZE_M}
          isRounded={false}
        />
      </div>
    </div>
  )
}

export default PotentialMatch
