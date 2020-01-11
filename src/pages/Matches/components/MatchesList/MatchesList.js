import React, { useEffect } from 'react'
import styles from './MatchesList.scss'
import Avatar from 'components/Avatar/Avatar'

import { useDispatch, useSelector } from 'react-redux'
import { matchList } from '../../../../actions/users'

import {
  getMatchesListIsLoading
} from 'selectors/user'
import { getOnlineUsers } from '../../../../selectors/onlineUsers'

const MatchesList = ({
  matchesList,
  setSelectedMatch
}) => {
  const dispatch = useDispatch()
  const isLoading = useSelector(getMatchesListIsLoading)
  const onlineUsers = useSelector(getOnlineUsers)

  useEffect(() => {
    dispatch(matchList())
  }, [])

  if (isLoading) {
    // spinner?
    return null
  }

  const handleProfileOnClick = match => () => {
    setSelectedMatch(match)
  }

  return (
    <div className={styles.component}>
      {matchesList?.map((match, index) => {
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
              <p
                className={styles.message}
              >
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
