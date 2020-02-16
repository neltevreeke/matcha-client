import React, { useEffect } from 'react'
import styles from './NewPasswordView.scss'
import Page from 'components/Page/Page'
import FormNewPassword from '../FormNewPassword/FormNewPassword'
import { useDispatch, useSelector } from 'react-redux'
import { getRouterQuery } from 'selectors/routes'
import { postNewPassword } from 'actions/users'
import { getNewPasswordSuccess } from 'selectors/user'
import { history } from '../../../../utils/configureStore'
import * as Routes from 'constants/Routes'

const NewPasswordView = () => {
  const routerQuery = useSelector(getRouterQuery)
  const dispatch = useDispatch()
  const newPasswordSuccess = useSelector(getNewPasswordSuccess)

  useEffect(() => {
    if (newPasswordSuccess === 200) {
      history.push(Routes.HOME)
    }
  }, [
    newPasswordSuccess
  ])

  const handleFormSubmit = ({ password }) => {
    dispatch(postNewPassword({
      password,
      token: routerQuery.token
    }))
  }

  return (
    <Page>
      <div className={styles.component}>
        <FormNewPassword
          onSubmit={handleFormSubmit}
        />
      </div>
    </Page>
  )
}

export default NewPasswordView
