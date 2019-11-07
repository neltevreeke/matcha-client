import React from 'react'
import styles from './Header.scss'
import { Link } from 'react-router-dom'
import * as Routes from 'constants/Routes'
import Button from 'components/Button/Button'

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
        <Button
          variant={Button.VARIANT_TRANSPARENT}
          className={styles.btnLogin}
        >
          log in
        </Button>
        <Button
          variant={Button.VARIANT_TRANSPARENT_BORDERED}
        >
          sign up
        </Button>
      </div>
    </div>
  )
}

export default Header
