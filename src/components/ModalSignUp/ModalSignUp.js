import React, { useState } from 'react'
import Modal from 'components/Modal/Modal'
import FormSignUp from './components/FormSignUp/FormSignUp'
import request from 'utils/request'
import styles from './ModalSignUp.scss'

const getErrorMessage = error => {
  const { message } = error.body

  if (message === 'conflict') {
    return 'That email already exists'
  }

  return 'Something went wrong, please try again later'
}

const ModalSignUp = ({
  ...props
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [isEmailSend, setEmailSend] = useState(false)

  const handleFormSubmit = async ({ firstName, lastName, email, password, age, gender }) => {
    setIsSubmitting(true)

    try {
      await request('signup', {
        method: 'POST',
        body: {
          firstName,
          lastName,
          email,
          age,
          gender,
          password,
          loc: {
            type: 'Point',
            coordinates: [0, 0]
          }
        }
      })

      setEmailSend(true)
    } catch (e) {
      setSubmitError(getErrorMessage(e))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Modal
      {...props}
      header={(
        <span>
          Sign up
        </span>
      )}
      body={(
        <>
          <FormSignUp
            onSubmit={handleFormSubmit}
            isSubmitting={isSubmitting}
            error={submitError}
          />
          <p className={styles.emailSend}>
            {isEmailSend && 'An email has been sent'}
          </p>
        </>
      )}
    />
  )
}

export default ModalSignUp
