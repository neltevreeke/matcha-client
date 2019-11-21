import React from 'react'
import styles from './UploadArea.scss'
import shortid from 'shortid'

const UploadArea = ({ onChange, children }) => {
  const id = shortid.generate()

  const handleOnChange = (event) => {
    onChange(event)

    // We need this to fix a bug where you want to upload the same image but nothing is happening
    event.target.value = null
  }

  return (
    <div className={styles.component}>
      <input
        onChange={handleOnChange}
        className={styles.input}
        type='file'
        accept='image/*'
        id={id}
      />
      <label
        className={styles.label}
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  )
}

export default UploadArea
