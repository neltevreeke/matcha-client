import React from 'react'
import Modal from 'components/Modal/Modal'
import FormLogin from './components/FormLogin/FormLogin'
import { useDispatch, useSelector } from 'react-redux'
import { login } from 'actions/users'
import {
  getLoginError,
  getLoginIsLoading
} from '../../selectors/user'

const ModalLogin = ({
  ...props
}) => {
  const error = useSelector(getLoginError)
  const isLoading = useSelector(getLoginIsLoading)
  const dispatch = useDispatch()

  const handleFormSubmit = ({ email, password }) => {
    dispatch(login({
      email,
      password
    }))
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
            isSubmitting={isLoading}
            error={error}
          />
        </>
      )}
    />
  )
}

export default ModalLogin
