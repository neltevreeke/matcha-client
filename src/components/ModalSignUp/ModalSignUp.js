import React, { useState } from 'react'
import Modal from 'components/Modal/Modal'
import FormSignUp from './components/FormSignUp/FormSignUp'
import request from 'utils/request'

const ModalSignUp = ({
  ...props
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFormSubmit = async ({ email, password }) => {
    setIsSubmitting(true)

    try {
      await request('signup', {
        method: 'POST',
        body: {
          email,
          password
        }
      })

      // TODO: finish me.
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
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
        />
      )}
    />
  )
}

export default ModalSignUp
