import React from 'react'
import styles from './FormAddInterestTag.scss'
import * as Yup from 'yup'
import {
  Formik,
  Form
} from 'formik'

import {
  Field,
  Input
} from 'components/FormElements'
import Button from '../../../../../components/Button/Button'

const initialValues = {
  tag: ''
}

const validationSchema = Yup.object().shape({
  tag: Yup.string()
    .matches(/^[A-Z]*.[a-z]*/, 'Can only contain latin characters')
    .min(3, 'Too short!')
    .max(20, 'Too long!')
})

const FormAddInterestTag = ({
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
                label='Add interest tag'
                id='tag'
                name='tag'
                type='text'
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
                add tag
              </Button>
            </Form>
          )
        }}
      />
    </div>
  )
}

export default FormAddInterestTag
