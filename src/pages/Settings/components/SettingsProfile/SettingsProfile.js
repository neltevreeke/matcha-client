import React from 'react'
import styles from './SettingsProfile.scss'
import FormUpdateUser from './components/FormUpdateUser/FormUpdateUser'
import { update } from 'actions/users'
import { useDispatch, useSelector } from 'react-redux'
import {
  getUpdateError,
  getUpdateIsLoading
} from '../../../../selectors/user'

const SettingsProfile = () => {
  const error = useSelector(getUpdateError)
  const isLoading = useSelector(getUpdateIsLoading)
  const dispatch = useDispatch()

  const handleFormSubmit = async ({ firstName, lastName, email, password, age, gender, biography }) => {
    dispatch(update({
      firstName,
      lastName,
      email,
      password,
      age,
      gender,
      biography
    }))
  }

  return (
    <div className={styles.component}>
      <FormUpdateUser
        onSubmit={handleFormSubmit}
        isSubmitting={isLoading}
        error={error}
      />
    </div>
  )
}

export default SettingsProfile
