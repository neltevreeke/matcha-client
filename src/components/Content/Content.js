import React from 'react'
import styles from './Content.scss'

const Content = ({
  children
}) => {
  return (
    <div className={styles.component}>
      {children}
    </div>
  )
}

export default Content
