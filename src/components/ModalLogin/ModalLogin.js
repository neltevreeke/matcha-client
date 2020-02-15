import React from 'react'
import Modal from 'components/Modal/Modal'
import FormLogin from './components/FormLogin/FormLogin'
import { useDispatch, useSelector } from 'react-redux'
import { login } from 'actions/users'
import {
  getLoginError,
  getLoginIsLoading
} from '../../selectors/user'
import { getRouterPathname } from '../../selectors/routes'
import Button from 'components/Button/Button'
import { history } from '../../utils/configureStore'
import * as Routes from '../../constants/Routes'
import styles from './ModalLogin.scss'

const ModalLogin = ({
  ...props
}) => {
  const error = useSelector(getLoginError)
  const route = useSelector(getRouterPathname)
  const isLoading = useSelector(getLoginIsLoading)
  const dispatch = useDispatch()

  const handleOnClickForgotPassword = () => {
    if (route === Routes.RESET_PASSWORD) {
      props.hideModal()
    }

    history.push(Routes.RESET_PASSWORD)
  }

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
        <div className={styles.component}>
          <FormLogin
            onSubmit={handleFormSubmit}
            isSubmitting={isLoading}
            error={error}
          />
          <div className={styles.buttonContainer}>
            <Button
              variant={Button.VARIANT_TRANSPARENT_RED}
              onClick={handleOnClickForgotPassword}
            >
              forgot password?
            </Button>
          </div>
        </div>
      )}
    />
  )
}

export default ModalLogin
