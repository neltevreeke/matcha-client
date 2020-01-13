import React from 'react'
import styles from './FormInsertChatMessage.scss'
import * as Yup from 'yup'
import {
  Formik,
  Form
} from 'formik'

import {
  Field,
  Input
} from 'components/FormElements'

const initialValues = {
  message: ''
}

const validationSchema = Yup.object().shape({
  tag: Yup.string()
    .matches(/^[A-Z]*.[a-z]*/, 'Can only contain latin characters')
})

const FormInsertChatMessage = ({
  onSubmit,
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
                id='message'
                name='message'
                type='text'
                component={Input}
                className={styles.chatInput}
              />

              {error &&
                <div
                  className={styles.submitError}
                >
                  {error}
                </div>}
            </Form>
          )
        }}
      />
    </div>
  )
}

export default FormInsertChatMessage
