import React, { useState } from 'react'
import _ from 'lodash'
import cx from 'classnames'
import styles from './Image.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Image = ({
  field,
  form,
  className,
  initialValue,
  isRound
}) => {
  const [
    selectedFile,
    setSelectedFile
  ] = useState(null)

  const onChange = ({ target }) => {
    const file = target.files[0]

    form.setFieldValue(field.name, file)

    const reader = new FileReader()
    reader.addEventListener('load', () => {
      setSelectedFile(reader.result)
    }, false)

    reader.readAsDataURL(file)
  }

  const hasTouched = !!form.touched[field.name]
  const hasError = !!form.errors[field.name]

  const id = _.uniqueId('file-uploader')

  return (
    <div className={cx(styles.component, {
      [className]: className,
      [styles.isRound]: isRound,
      [styles.hasError]: hasTouched && hasError,
      [styles.hasInitialValue]: initialValue
    })}
    >
      <input
        onChange={onChange}
        type='file'
        accept='image/*'
        id={id}
      />
      <label
        className={styles.label}
        htmlFor={id}
      >
        <div className={styles.placeholder}>
          <div className={styles.overlay}>
            <FontAwesomeIcon
              icon='camera'
              className={styles.icon}
            />
          </div>
          {selectedFile ? (
            <img
              className={styles.picture}
              alt='Selected preview'
              src={selectedFile}
            />
          ) : initialValue ? (
            <img
              className={styles.picture}
              alt='Selected preview'
              src={initialValue}
            />
          ) : (
            <FontAwesomeIcon
              icon='camera'
              className={styles.icon}
            />
          )}
        </div>
      </label>
    </div>
  )
}

export default Image
