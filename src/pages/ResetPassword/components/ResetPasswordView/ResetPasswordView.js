import React from 'react'
import styles from './ResetPasswordView.scss'
import Page from 'components/Page/Page'
import FormResetPassword from '../FormResetPassword/FormResetPassword'
// import { useDispatch } from 'react-redux'

const ResetPasswordView = () => {
  // const dispatch = useDispatch()

  const handleFormSubmit = ({ email }, { resetForm }) => {
    // todo: dispatch action that sends {email} to api (request to reset-password route)

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
