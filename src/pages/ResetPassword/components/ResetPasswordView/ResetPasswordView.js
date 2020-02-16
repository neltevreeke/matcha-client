import React from 'react'
import styles from './ResetPasswordView.scss'
import Page from 'components/Page/Page'
import FormResetPassword from '../FormResetPassword/FormResetPassword'
import { useDispatch } from 'react-redux'
import { postResetPassword } from 'actions/users'
const ResetPasswordView = () => {
  const dispatch = useDispatch()

  const handleFormSubmit = ({ resetPasswordEmail }, { resetForm }) => {
    dispatch(postResetPassword(resetPasswordEmail))

    resetForm()
  }

  return (
    <Page>
      <div className={styles.component}>
        <FormResetPassword
          onSubmit={handleFormSubmit}
        />
      </div>
    </Page>
  )
}

export default ResetPasswordView
