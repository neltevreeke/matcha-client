import React from 'react'
import styles from './Switch.scss'
import 'react-toggle/style.css'
import Toggle from 'react-toggle'

const Switch = ({
  field,
  form,
  ...props
}) => {
  const handleChange = () => {
    form.setFieldValue(field.name, !field.value)
  }

  return (
    <div className={styles.component}>
      <Toggle
        checked={field.value}
        icons={false}
        onChange={handleChange}
        {...props}
      />
    </div>
  )
}

export default Switch
