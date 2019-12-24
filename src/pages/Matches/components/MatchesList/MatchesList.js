import React, { useEffect } from 'react'
import styles from './MatchesList.scss'
import Avatar from 'components/Avatar/Avatar'

import { useDispatch, useSelector } from 'react-redux'
import { matchList } from '../../../../actions/users'

import {
  getMatchesList,
  getMatchesListIsLoading
} from 'selectors/user'
import { getOnlineUsers } from '../../../../selectors/onlineUsers'

const MatchesList = () => {
  const dispatch = useDispatch()
  const matchesList = useSelector(getMatchesList)
  const isLoading = useSelector(getMatchesListIsLoading)
  const onlineUsers = useSelector(getOnlineUsers)

  useEffect(() => {
    dispatch(matchList())
  }, [])

  if (isLoading) {
    // spinner?
    return null
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
                blabla
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MatchesList
