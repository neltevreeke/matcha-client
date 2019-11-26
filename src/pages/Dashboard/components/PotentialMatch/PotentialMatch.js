import React from 'react'
import styles from './PotentialMatch.scss'
import Avatar from '../../../../components/Avatar/Avatar'

const PotentialMatch = ({
  potentialMatch
}) => {
  return (
    <div className={styles.component}>
      <div className={styles.avatar}>
        <Avatar
          isOnline
          user={potentialMatch}
          size={Avatar.SIZE_M}
          isRounded={false}
        />
      </div>
    </div>
  )
}

export default PotentialMatch
