import React from 'react'
import styles from './FormResetPassword.scss'
import * as Yup from 'yup'
import {
  Formik,
  Form
} from 'formik'

import {
  Field,
  Input
} from 'components/FormElements'
import Button from 'components/Button/Button'

const initialValues = {
  email: ''
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
})

const FormResetPassword = ({
  onSubmit,
  isSubmitting,
  error
}) => {
  return (
    <div className={styles.component}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <Form>
              <Field
                label='Email'
                id='email'
                name='email'
                type='email'
                placeholder='Enter your email'
                component={Input}
              />

              {error &&
                <div
                  className={styles.submitError}
                >
                  {error}
                </div>}

              <Button
                type='submit'
                onClick={handleSubmit}
                variant={Button.VARIANT_DEFAULT}
                isLoading={isSubmitting}
              >
                send email
              </Button>
            </Form>
          )
        }}
      />
    </div>
  )
}

export default FormResetPassword
