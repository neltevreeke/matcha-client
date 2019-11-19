import React, { useState } from 'react'
import styles from './SettingsProfile.scss'
import request from 'utils/request'
import FormUpdateUser from './components/FormUpdateUser/FormUpdateUser'

const getErrorMessage = error => {
  const { message } = error.body

  if (message === 'conflict') {
    return 'That email already exists'
  }

  return 'Something went wrong, please try again later'
}

const SettingsProfile = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleFormSubmit = async ({ firstName, lastName, email, password, age, gender, biography }) => {
    setIsSubmitting(true)

    try {
      await request('update', {
        method: 'POST',
        body: {
          firstName,
          lastName,
          email,
          age,
          gender,
          biography
        }
      })
    } catch (e) {
      setSubmitError(getErrorMessage(e))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={styles.component}>
      <FormUpdateUser
        onSubmit={handleFormSubmit}
        isSubmitting={isSubmitting}
        error={submitError}
      />
    </div>
  )
}

export default SettingsProfile
