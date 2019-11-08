import React from 'react'
import cx from 'classnames'
import styles from './Input.scss'
import _ from 'lodash'

const getCapitalizedFirst = value => {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

const Input = ({
  field,
  form,
  innerClassName,
  iconBefore,
  innerRef,
  capitalizeFirst,
  ...props
}) => {
  const hasTouched = _.has(form?.touched, field.name)
  const hasError = _.has(form?.errors, field.name)

  if (capitalizeFirst) {
    const originalOnChange = field.onChange

    field.onChange = (...args) => {
      const [event] = args
      event.target.value = getCapitalizedFirst(event.target.value)

      originalOnChange.apply(this, args)
    }
  }

  return (
    <div
      className={cx({
        [styles.hasError]: hasTouched && hasError
      })}
    >
      <div className={styles.container}>
        <input
          ref={innerRef}
          {...field}
          {...props}
          className={cx(innerClassName, styles.input)}
        />
      </div>
    </div>
  )
}

Input.displayName = 'Input'

export default Input
