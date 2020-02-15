import React from 'react'
import styles from './FormLogin.scss'

import {
  Formik,
  Form
} from 'formik'

import {
  Field,
  Input
} from 'components/FormElements'
import Button from '../../../Button/Button'

const initialValues = {
  email: process.env.NODE_ENV === 'development' ? 'nelte.p.vreeke@gmail.com' : '',
  password: process.env.NODE_ENV === 'development' ? 'test1234' : ''
}

const getErrorMessage = error => {
  const { message } = error.body

  if (message === 'not-found') {
    return 'Invalid email or password'
  }

  if (message === 'not-allowed') {
    return 'This account has been reported as fake multiple times and will not be able to log in'
  }

  return 'Something went wrong, please try again later'
}

const FormLogin = ({
  onSubmit,
  isSubmitting,
  error
}) => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit }) => {
        return (
          <Form>
            <Field
              label='Email'
              id='email'
              name='email'
              type='email'
              component={Input}
              placeholder='Email address'
            />

            <Field
              label='Password'
              id='password'
              name='password'
              type='password'
              component={Input}
              placeholder='Password'
            />

            {error && (
              <div className={styles.submitError}>
                {getErrorMessage(error)}
              </div>
            )}

            <Button
              onClick={handleSubmit}
              type='submit'
              variant={Button.VARIANT_DEFAULT}
              isLoading={isSubmitting}
            >
              log in
            </Button>
          </Form>
        )
      }}
    />
  )
}

export default FormLogin
