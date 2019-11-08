import React from 'react'
import cx from 'classnames'
import styles from './Textarea.scss'
import _ from 'lodash'
import TextareaAutosize from 'react-textarea-autosize'

const Textarea = ({
  field,
  form,
  className,
  rootClassName,
  ...props
}) => {
  const hasTouched = _.has(form?.touched, field.name)
  const hasError = _.has(form?.errors, field.name)

  if (props.innerRef) {
    props.inputRef = props.innerRef
    delete props.innerRef
  }

  if (props.rows) {
    props.minRows = props.rows
    delete props.rows
  }

  return (
    <div
      className={cx({
        [styles.hasError]: hasTouched && hasError,
        [rootClassName]: rootClassName
      })}
    >
      <div className={styles.container}>
        <TextareaAutosize
          {...field}
          {...props}
          className={cx(className, styles.textarea)}
        />
      </div>
    </div>
  )
}

export default Textarea
