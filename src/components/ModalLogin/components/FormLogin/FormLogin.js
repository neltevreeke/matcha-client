import React from 'react'

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
  email: '',
  password: ''
}

const FormLogin = ({
  onSubmit
}) => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, isSubmitting }) => {
        return (
          <Form>
            <Field
              id='email'
              name='email'
              type='email'
              component={Input}
              placeholder='Email address'
            />
            <Field
              id='password'
              name='password'
              type='password'
              component={Input}
              placeholder='Password'
            />
            <Button
              onClick={handleSubmit}
              type='submit'
              variant={Button.VARIANT_TRANSPARENT}
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
