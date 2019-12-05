import React from 'react'
import styles from './FormUpdateSearchFilters.scss'
import * as Gender from 'constants/Gender'
// import * as Yup from 'yup'

import {
  Formik,
  Form
} from 'formik'

import {
  Field,
  Select,
  Slider
} from 'components/FormElements'
import Button from 'components/Button/Button'

const initialValues = {
  ageRange: [18, 25],
  maxDistance: [0, 25],
  commonTags: [0, 4],
  fameRating: [0, 100],
  interestedInGender: Gender.FEMALE
}

const orientationOptions = [{
  label: 'Male',
  value: Gender.MALE
}, {
  label: 'Female',
  value: Gender.FEMALE
}, {
  label: 'Bisexual',
  value: Gender.MALE + ' and ' + Gender.FEMALE
}]

const FormUpdateSearchFilters = ({
  onSubmit,
  isSubmitting,
  error
}) => {
  return (
    <div className={styles.component}>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <Form>
              <Field
                name='ageRange'
                label='Age range'
                id='ageRange'
                min={18}
                max={99}
                component={Slider}
              />

              <Field
                name='maxDistance'
                label='Maximum distance'
                id='maxDistance'
                component={Slider}
              />

              <Field
                name='commonTags'
                label='Amount of common interest tags'
                id='commonTags'
                component={Slider}
              />

              <Field
                name='fameRating'
                label='Fame rating'
                id='fameRating'
                component={Slider}
              />

              <Field
                name='interestedInGender'
                label='Sexual orientation'
                id='interestedInGender'
                component={Select}
                options={orientationOptions}
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

export default FormUpdateSearchFilters
