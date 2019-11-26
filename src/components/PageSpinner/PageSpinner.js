import React from 'react'
import styles from './PageSpinner.scss'
import Spinner from '../Spinner/Spinner'

const PageSpinner = () => {
  return (
    <div className={styles.component}>
      <Spinner
        className={styles.spinner}
        primary
      />
    </div>
  )
}

export default PageSpinner
