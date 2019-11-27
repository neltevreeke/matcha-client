import React from 'react'
import styles from './PotentialMatch.scss'
import Avatar from '../../../../components/Avatar/Avatar'

const PotentialMatch = ({
  setSelectedMatch,
  potentialMatch,
  selectedMatch,
  onlineUsers
}) => {
  const isOnline = onlineUsers.some(onlineUser => onlineUser._id === potentialMatch._id)

  const handlePotentialMatchOnClick = potentialMatch => () => {
    if (selectedMatch === potentialMatch) {
      setSelectedMatch(null)
      return null
    }

    setSelectedMatch(potentialMatch)
  }

  return (
    <div
      className={styles.component}
      onClick={handlePotentialMatchOnClick(potentialMatch)}
    >
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
