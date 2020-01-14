import React from 'react'
import {
  Field as FormikField,
  FastField as FormikFastField,
  ErrorMessage as FormikErrorMessage
} from 'formik'
import Label from '../Label/Label'
import cx from 'classnames'

import styles from './Field.scss'

const Field = ({
  name,
  label,
  hideFieldLabel,
  isOptional,
  className,
  isFast = false,
  isNarrow,
  hideFieldError,
  ...props
}) => {
  if (hideFieldLabel) {
    props.label = label
  }

  const FormikFieldComponent = isFast ? FormikFastField : FormikField

  return (
    <div
      className={cx(styles.component, {
        [className]: className,
        [styles.isNarrow]: isNarrow
      })}
    >
      <div className={styles.labelContainer}>
        {!hideFieldLabel && (
          <Label>
            {label}
          </Label>
        )}
        {isOptional && (
          <div className={styles.isOptional}>
            Optional
          </div>
        )}
      </div>
      <div className={styles.field}>
        <FormikFieldComponent
          name={name}
          {...props}
        />
      </div>
      {!hideFieldError && (
        <FormikErrorMessage
          name={name}
          render={(error) => (
            <div className={styles.error}>
              <small>{error}</small>
            </div>
          )}
        />
      )}
    </div>
  )
}

export default Field
