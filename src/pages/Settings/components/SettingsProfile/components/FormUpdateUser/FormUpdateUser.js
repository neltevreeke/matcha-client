import React from 'react'
import styles from './FormUpdateUser.scss'
import { useSelector } from 'react-redux'
import * as Yup from 'yup'
import * as Gender from 'constants/Gender'

import {
  Formik,
  Form
} from 'formik'

import {
  Field,
  Input,
  Select,
  Textarea
} from 'components/FormElements'

import { getUser } from 'selectors/user'
import Button from '../../../../../../components/Button/Button'

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
  biography: Yup.string()
    .max(140, 'Maximum of 140 characters allowed')
    .matches(/^[A-Z]*.[a-z]*/, 'Can only contain latin characters')
})

const setInitialValues = (user) => {
  return {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    age: user.age,
    gender: user.gender,
    biography: user.biography
  }
}

const genderOptions = [{
  label: 'Male',
  value: Gender.MALE
}, {
  label: 'Female',
  value: Gender.FEMALE
}]

const FormUpdateUser = ({
  onSubmit,
  isSubmitting,
  error
}) => {
  const user = useSelector(getUser)
  const initialValues = setInitialValues(user)

  return (
    <div className={styles.component}>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <Form>
              <Field
                label='First name'
                id='firstName'
                name='firstName'
                type='text'
                component={Input}
              />

              <Field
                label='Last name'
                id='lastName'
                name='lastName'
                type='text'
                component={Input}
              />

              <Field
                label='Email'
                id='email'
                name='email'
                type='email'
                component={Input}
              />

              <Field
                label='Age'
                id='age'
                name='age'
                type='number'
                min='18'
                max='99'
                component={Input}
              />

              <Field
                label='Gender'
                id='gender'
                name='gender'
                component={Select}
                options={genderOptions}
              />

              <Field
                label='Biography'
                id='biography'
                name='biography'
                component={Textarea}
                rows={4}
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
                update
              </Button>
            </Form>
          )
        }}
      />
    </div>
  )
}

export default FormUpdateUser
