import React from 'react'
import styles from './FormUpdateLocation.scss'
import { Form, Formik } from 'formik'
import { Field, Input } from '../../../../../components/FormElements'
import Button from '../../../../../components/Button/Button'
import * as Yup from 'yup'

const initialValues = {
  long: '',
  lat: ''
}

const validationSchema = Yup.object().shape({
  long: Yup.number()
    .min(-180)
    .max(180)
    .required('Longitude is required'),
  lat: Yup.number()
    .min(-90)
    .max(90)
    .required('Latitude is required')
})

const FormUpdateLocation = ({
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
                label='Update longitude (must be between -180 and 180)'
                id='long'
                name='long'
                type='number'
                component={Input}
              />

              <Field
                label='Update latitude (must be between -90 and 90)'
                id='lat'
                name='lat'
                type='number'
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
                update
              </Button>
            </Form>
          )
        }}
      />
    </div>
  )
}

export default FormUpdateLocation
