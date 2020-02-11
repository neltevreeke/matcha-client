import React from 'react'
import styles from './FormEmailNotifications.scss'
// import * as Yup from 'yup'
import {
  Formik,
  Form
} from 'formik'

import {
  Field,
  Toggle
} from 'components/FormElements'
import Button from 'components/Button/Button'

const initialValues = {
  connect: true,
  disconnect: true,
  match: true,
  unmatch: true,
  block: true,
  unblock: true,
  profileView: true,
  report: true
}

// const validationSchema = Yup.object().shape({
//   tag: Yup.string()
//     .matches(/^[A-Z]*.[a-z]*/, 'Can only contain latin characters')
//     .min(5, 'Too short!')
//     .max(20, 'Too long!')
//     .ensure()
// })

const FormEmailNotifications = ({
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
                label='Receive email on connect'
                id='connect'
                name='connect'
                type='checkbox'
                component={Toggle}
              />

              {/* <Field */}
              {/*  label='Receive email on disconnect' */}
              {/*  id='disconnect' */}
              {/*  name='disconnect' */}
              {/*  component={Toggle} */}
              {/* /> */}

              {/* <Field */}
              {/*  label='Receive email on match' */}
              {/*  id='match' */}
              {/*  name='match' */}
              {/*  component={Toggle} */}
              {/* /> */}

              {/* <Field */}
              {/*  label='Receive email on unmatch' */}
              {/*  id='unmatch' */}
              {/*  name='unmatch' */}
              {/*  component={Toggle} */}
              {/* /> */}

              {/* <Field */}
              {/*  label='Receive email on block' */}
              {/*  id='block' */}
              {/*  name='block' */}
              {/*  component={Toggle} */}
              {/* /> */}

              {/* <Field */}
              {/*  label='Receive email on unblock' */}
              {/*  id='unblock' */}
              {/*  name='unblock' */}
              {/*  component={Toggle} */}
              {/* /> */}

              {/* <Field */}
              {/*  label='Receive email on profileview' */}
              {/*  id='profileView' */}
              {/*  name='profileView' */}
              {/*  component={Toggle} */}
              {/* /> */}

              {/* <Field */}
              {/*  label='Receive email on report' */}
              {/*  id='report' */}
              {/*  name='report' */}
              {/*  component={Toggle} */}
              {/* /> */}

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
