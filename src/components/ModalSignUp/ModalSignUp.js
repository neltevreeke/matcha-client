import React, { useState } from 'react'
import Modal from 'components/Modal/Modal'
import FormSignUp from './components/FormSignUp/FormSignUp'
import request from 'utils/request'

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

  const handleOnRequestClose = () => {
    props.hideModal()
  }

  const handleFormSubmit = async ({ firstName, lastName, email, password, age, gender }) => {
    setIsSubmitting(true)

    try {
      const res = await request('signup', {
        method: 'POST',
        body: {
          firstName,
          lastName,
          email,
          age,
          gender,
          password
        }
      })

      if (res) {
        handleOnRequestClose()
      }
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
        <FormSignUp
          onSubmit={handleFormSubmit}
          isSubmitting={isSubmitting}
          error={submitError}
        />
      )}
    />
  )
}

export default ModalSignUp
