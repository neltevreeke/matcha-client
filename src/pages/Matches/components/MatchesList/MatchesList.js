import React from 'react'
import styles from './MatchesList.scss'
import Avatar from 'components/Avatar/Avatar'
import { useSelector } from 'react-redux'
import { getOnlineUsers } from 'selectors/onlineUsers'

const MatchesList = ({
  matches,
  setSelectedMatch
}) => {
  const onlineUsers = useSelector(getOnlineUsers)

  const handleProfileOnClick = match => () => {
    setSelectedMatch(match)
  }

  return (
    <div className={styles.component}>
      {matches?.map((match, index) => {
        const isOnline = onlineUsers.some(onlineUser => onlineUser._id === match._id)

        const {
          firstName,
          lastName
        } = match.likedUserId

        return (
          <div
            key={index}
            className={styles.profile}
            onClick={handleProfileOnClick(match)}
          >
            <Avatar
              user={match.likedUserId}
              isOnline={isOnline}
            />
            <div
              className={styles.info}
            >
              <p
                className={styles.name}
              >
                {firstName + ' ' + lastName}
              </p>
              <p className={styles.message}>
                blablablablablablablablablablablablablablabla
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MatchesList
