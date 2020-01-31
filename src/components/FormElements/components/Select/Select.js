import React from 'react'
import ReactSelect from 'react-select'
import styles from './Select.scss'
import cx from 'classnames'

const getValueFromOptions = (options, value) => {
  for (const option of options) {
    if (option.value === value) {
      return option
    }
  }

  return null
}

const IndicatorsContainer = () => {
  return (
    <div className={styles.indicatorsContainer}>
      <svg
        width='24'
        height='13'
        viewBox='0 0 24 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M10.971 12.5879C11.1061 12.7185 11.2665 12.8222 11.443 12.8929C11.6196 12.9636 11.8089 13 12 13C12.1911 13 12.3804 12.9636 12.557 12.8929C12.7335 12.8222 12.8939 12.7185 13.029 12.5879L23.5738 2.40016C23.8467 2.13649 24 1.77887 24 1.40598C24 1.03309 23.8467 0.675476 23.5738 0.411803C23.3009 0.14813 22.9307 8.78559e-09 22.5447 0C22.1588 -8.78559e-09 21.7886 0.14813 21.5157 0.411803L12 9.60533L2.48428 0.411803C2.34914 0.281245 2.18872 0.177681 2.01216 0.107024C1.8356 0.0363668 1.64636 2.7513e-09 1.45526 0C1.26415 -2.7513e-09 1.07491 0.0363669 0.898354 0.107024C0.721794 0.177681 0.561368 0.281245 0.426235 0.411803C0.291102 0.54236 0.183908 0.697354 0.110775 0.867936C0.0376413 1.03852 -2.84772e-09 1.22135 0 1.40598C2.84772e-09 1.59062 0.0376413 1.77345 0.110775 1.94403C0.183908 2.11461 0.291102 2.26961 0.426235 2.40016L10.971 12.5879Z'
          fill='#9B9B9B'
        />
      </svg>
    </div>
  )
}

const Select = ({
  field,
  form,
  ...props
}) => {
  const hasTouched = form?.touched && !!form.touched[field.name]
  const hasError = form?.errors && !!form.errors[field.name]

  field.value = getValueFromOptions(props.options, field.value)

  return (
    <div
      className={cx(styles.component, {
        [styles.hasError]: hasTouched && hasError
      })}
    >
      <ReactSelect
        classNamePrefix='react-select'
        name={field.name}
        value={field.value}
        onChange={option => {
          form.setFieldValue(field.name, option.value)
        }}
        components={{
          IndicatorsContainer,
          IndicatorSeparator: () => null
        }}
        {...props}
      />
    </div>
  )
}

export default Select
