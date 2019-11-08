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
  email: process.env.NODE_ENV === 'development' ? 'nelte.p.vreeke@gmail.com' : '',
  password: process.env.NODE_ENV === 'development' ? 'lollol1' : ''
}

const FormLogin = ({
  onSubmit,
  isSubmitting
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
