import React from 'react'
import styles from './FormAddInterestTag.scss'
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

const FormAddInterestTag = ({
  onSubmit,
  isSubmitting,
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
                label='Add interest tag'
                id='tag'
                name='tag'
                type='text'
                component={Input}
              />

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
