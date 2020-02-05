import React from 'react'
import styles from './SettingsBlockedUsers.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
  getBlockedUsers,
  getIsBlockedUsersLoaded
} from 'selectors/blockedUsers'
import Button from 'components/Button/Button'
import PageSpinner from '../../../../components/PageSpinner/PageSpinner'
import Avatar from '../../../../components/Avatar/Avatar'
import moment from 'moment'
import { deleteBlockedUser } from 'actions/users'

const SettingsBlockedUsers = () => {
  const blockedUsers = useSelector(getBlockedUsers)
  const isLoading = useSelector(getIsBlockedUsersLoaded)
  const dispatch = useDispatch()

  if (isLoading) {
    return <PageSpinner />
  }

  const handleUnblockClick = userId => () => {
    dispatch(deleteBlockedUser(userId))
  }

  return (
    <div className={styles.component}>
      {blockedUsers.map((bU, index) => {
        const mDate = moment.utc(bU.blockedOn)

        return (
          <div
            key={index}
            className={styles.blockedUser}
          >
            <div className={styles.avatarContainer}>
              <Avatar
                user={bU.blockedUserId}
                size={Avatar.SIZE_S}
              />
            </div>
            <div className={styles.info}>
              <div className={styles.blockText}>
                {bU.blockedUserId.firstName + ' ' + bU.blockedUserId.lastName}
              </div>
              <div className={styles.blockDate}>
                {'blocked on: ' + mDate.format('DD-MM-YYYY HH:mm')}
              </div>
            </div>
            <div className={styles.controls}>
              <Button
                variant={Button.VARIANT_DEFAULT_RED}
                onClick={handleUnblockClick(bU.blockedUserId._id)}
              >
                unblock
              </Button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SettingsBlockedUsers
