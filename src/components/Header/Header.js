import React from 'react'
import styles from './Header.scss'
import { Link } from 'react-router-dom'
import * as Routes from 'constants/Routes'

const Header = () => {
  return (
    <div className={styles.component}>
      <Link
        to={Routes.HOME}
        className={styles.logo}
      >
        matcha
      </Link>
      <div className={styles.controls}>
        Empty.
      </div>
    </div>
  )
}

export default Header
