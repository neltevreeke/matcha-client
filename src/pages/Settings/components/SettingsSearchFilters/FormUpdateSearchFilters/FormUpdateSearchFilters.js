import React from 'react'
import styles from './FormUpdateSearchFilters.scss'
import * as GenderPreference from 'constants/GenderPreference'
import * as Yup from 'yup'

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

const orientationOptions = [{
  label: 'Male',
  value: GenderPreference.MALE
}, {
  label: 'Female',
  value: GenderPreference.FEMALE
}, {
  label: 'Bisexual',
  value: GenderPreference.BISEXUAL
}]

const validationSchema = Yup.object().shape({
  genderPreference: Yup.string()
    .required('Required')
})

const FormUpdateSearchFilters = ({
  initialValues,
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
                name='age'
                label='Age range'
                id='age'
                min={18}
                max={99}
                component={Slider}
              />

              <Field
                name='distance'
                label='Maximum distance'
                id='distance'
                max={50}
                component={Slider}
              />

              <Field
                name='commonTags'
                label='Amount of common interest tags'
                id='commonTags'
                max={10}
                component={Slider}
              />

              <Field
                name='fameRating'
                label='Fame rating'
                id='fameRating'
                max={200}
                component={Slider}
              />

              <Field
                name='genderPreference'
                label='Gender preference'
                id='genderPreference'
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
