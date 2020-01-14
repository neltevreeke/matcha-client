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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'components/Button/Button'

const initialValues = {
  message: ''
}

const validationSchema = Yup.object().shape({
  message: Yup.string()
    .matches(/^[A-Z]*.[a-z]*/, 'Can only contain latin characters')
    .min(1)
    .ensure()
})

const FormInsertChatMessage = ({
  onSubmit
}) => {
  return (
    <div className={styles.component}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <Form className={styles.form}>
              <Field
                id='message'
                name='message'
                type='text'
                component={Input}
                className={styles.chatInput}
                hideFieldError
                hideFieldLabel
              />

              <Button
                variant={Button.VARIANT_DEFAULT}
                type='submit'
                className={styles.submitButton}
              >
                <FontAwesomeIcon
                  className={styles.menuIcon}
                  icon='paper-plane'
                />
              </Button>
            </Form>
          )
        }}
      />
    </div>
  )
}

export default FormInsertChatMessage
