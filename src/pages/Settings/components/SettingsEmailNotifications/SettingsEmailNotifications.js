import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './SettingsEmailNotifications.scss'
import FormEmailNotifications from './FormEmailNotifications/FormEmailNotifications'

import { update } from 'actions/users'
import { getUpdateIsLoading, getUser } from '../../../../selectors/user'

const getInitialValuesFromUser = user => {
  return {
    connect: user.emailNotifications.connect,
    disconnect: user.emailNotifications.disconnect,
    match: user.emailNotifications.match,
    unmatch: user.emailNotifications.unmatch,
    block: user.emailNotifications.block,
    unblock: user.emailNotifications.unblock,
    profileView: user.emailNotifications.profileView,
    report: user.emailNotifications.report
  }
}

const SettingsEmailNotifications = () => {
  const dispatch = useDispatch()
  const user = useSelector(getUser)
  const updateIsLoading = useSelector(getUpdateIsLoading)
  const initialValues = getInitialValuesFromUser(user)

  const handleFormSubmit = (emailNotifications) => {
    dispatch(update({
      emailNotifications
    }))
  }

  return (
    <div className={styles.component}>
      <FormEmailNotifications
        onSubmit={handleFormSubmit}
        isSubmitting={updateIsLoading}
        initialValues={initialValues}
      />
    </div>
  )
}

export default SettingsEmailNotifications
