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

const handleOnSubmit = (values) => {
  fetch('http://localhost:4000/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(values)
  })
    .then(res => {
      // eslint-disable-next-line no-console
      console.log(res)
    })
}

const FormLogin = ({
  onSubmit = handleOnSubmit
}) => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, isSubmitting }) => {
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
