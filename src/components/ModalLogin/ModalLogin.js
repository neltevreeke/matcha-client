import React, { useState } from 'react'
import Modal from 'components/Modal/Modal'
import FormLogin from './components/FormLogin/FormLogin'
import request from 'utils/request'

const ModalLogin = ({
  ...props
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFormSubmit = async ({ email, password }) => {
    setIsSubmitting(true)

    try {
      await request('login', {
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
          Log in
        </span>
      )}
      body={(
        <FormLogin
          onSubmit={handleFormSubmit}
          isSubmitting={isSubmitting}
        />
      )}
    />
  )
}

export default ModalLogin
