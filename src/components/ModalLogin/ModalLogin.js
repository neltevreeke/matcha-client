import React, { useState } from 'react'
import Modal from 'components/Modal/Modal'
import FormLogin from './components/FormLogin/FormLogin'
import request from 'utils/request'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from 'actions/users'
import * as Routes from 'constants/Routes'
import { setToken } from 'utils/token'

const getErrorMessage = error => {
  const { message } = error.body

  if (message === 'not-found') {
    return 'Invalid email or password'
  }

  return 'Something went wrong, please try again later'
}

const ModalLogin = ({
  ...props
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()

  const handleFormSubmit = async ({ email, password }) => {
    setIsSubmitting(true)

    try {
      const { user, token } = await request('login', {
        method: 'POST',
        body: {
          email,
          password
        }
      })

      setToken(token)
      dispatch(setUser(user))

      props.hideModal()
      history.push(Routes.DASHBOARD)
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
          Log in
        </span>
      )}
      body={(
        <>
          <FormLogin
            onSubmit={handleFormSubmit}
            isSubmitting={isSubmitting}
            error={submitError}
          />
        </>
      )}
    />
  )
}

export default ModalLogin
