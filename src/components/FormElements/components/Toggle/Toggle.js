import React from 'react'
import styles from './Toggle.scss'
import 'react-toggle/style.css'

const Toggle = ({
  field,
  form,
  ...props
}) => {
  const handleChange = value => {
    form.setFieldValue(field.name, value)
  }

  return (
    <div className={styles.component}>
      <Toggle
        checked={field.value}
        name={field.name}
        onChange={handleChange}
        {...props}
      />
    </div>
  )
}

export default Toggle
