import React from 'react'
import styles from './FormEmailNotifications.scss'
// import * as Yup from 'yup'
import {
  Formik,
  Form
} from 'formik'

import {
  Field,
  Switch
} from 'components/FormElements'
import Button from 'components/Button/Button'

const FormEmailNotifications = ({
  onSubmit,
  isSubmitting,
  initialValues,
  error
}) => {
  return (
    <div className={styles.component}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <Form>
              <Field
                label='Receive email on connect'
                id='connect'
                name='connect'
                type='checkbox'
                component={Switch}
              />

              <Field
                label='Receive email on disconnect'
                id='disconnect'
                name='disconnect'
                component={Switch}
              />

              <Field
                label='Receive email on match'
                id='match'
                name='match'
                component={Switch}
              />

              <Field
                label='Receive email on unmatch'
                id='unmatch'
                name='unmatch'
                component={Switch}
              />

              <Field
                label='Receive email on block'
                id='block'
                name='block'
                component={Switch}
              />

              <Field
                label='Receive email on unblock'
                id='unblock'
                name='unblock'
                component={Switch}
              />

              <Field
                label='Receive email on profileview'
                id='profileView'
                name='profileView'
                component={Switch}
              />

              <Field
                label='Receive email on report'
                id='report'
                name='report'
                component={Switch}
              />

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

export default FormEmailNotifications
