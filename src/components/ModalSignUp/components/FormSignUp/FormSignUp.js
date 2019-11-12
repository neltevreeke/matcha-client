import React from 'react'
import * as Yup from 'yup'
import styles from './FormSignUp.scss'
import * as Gender from 'constants/Gender'

import {
  Formik,
  Form
} from 'formik'

import {
  Field,
  Input,
  Select
} from 'components/FormElements'
import Button from '../../../Button/Button'

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Z]*.[a-z]*/, 'Can only contain latin characters')
    .min(2, 'Too short!')
    .max(30, 'Too long!')
    .required('Required'),
  lastName: Yup.string()
    .matches(/^[A-Z]*.[a-z]*/, 'Can only contain latin characters')
    .min(2, 'Too short!')
    .max(30, 'Too long')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  age: Yup.number()
    .min(18, 'Too young')
    .max(99, 'Too old')
    .integer('Age must be an integer')
    .required('Required'),
  gender: Yup.string()
    .required('Required'),
  password: Yup.string()
    .min(7, 'Too short!')
    .matches(/[a-zA-Z]/, 'Only latin letters are allowed')
    .required('Required'),
  passwordRepeat: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Please make sure that the passwords are matching')
    .required()
})

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  age: '',
  gender: '',
  password: '',
  passwordRepeat: ''
}

const genderOptions = [{
  label: 'Male',
  value: Gender.MALE
}, {
  label: 'Female',
  value: Gender.FEMALE
}]

const FormSignUp = ({
  onSubmit,
  isSubmitting,
  error
}) => {
  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit }) => {
        return (
          <Form>
            <Field
              label='First name'
              id='firstName'
              name='firstName'
              type='text'
              component={Input}
              placeholder='Theresa'
            />

            <Field
              label='Last name'
              id='lastName'
              name='lastName'
              type='text'
              component={Input}
              placeholder='Williams'
            />

            <Field
              label='Email'
              id='email'
              name='email'
              type='email'
              component={Input}
              placeholder='example@example.com'
            />

            <Field
              label='Age'
              id='age'
              name='age'
              type='number'
              min='18'
              max='99'
              component={Input}
              placeholder='27'
            />

            <Field
              label='Gender'
              id='gender'
              name='gender'
              component={Select}
              options={genderOptions}
            />

            <Field
              label='Password'
              id='password'
              name='password'
              component={Input}
              type='password'
            />

            <Field
              label='Repeat password'
              id='repeatPassword'
              name='passwordRepeat'
              component={Input}
              type='password'
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
              sign up
            </Button>
          </Form>
        )
      }}
    />
  )
}

export default FormSignUp
