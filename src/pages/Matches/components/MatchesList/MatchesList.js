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
        const isOnline = onlineUsers.some(onlineUser => onlineUser._id === match.likedUserId._id)

        let matchDate = match.date.split('T')
        matchDate = matchDate[0].split('-')

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
                {'match: ' + matchDate[2] + '-' + matchDate[1] + '-' + matchDate[0]}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MatchesList
