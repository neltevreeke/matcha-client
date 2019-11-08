import React from 'react'
import styles from './Label.scss'

const Label = ({
  children
}) => (
  <div className={styles.component}>
    {children}
  </div>
)

export default Label
