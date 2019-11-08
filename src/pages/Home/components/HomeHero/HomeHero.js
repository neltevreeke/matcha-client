import React from 'react'
import styles from './HomeHero.scss'
import Button from '../../../../components/Button/Button'

const HomeHero = () => {
  return (
    <div className={styles.component}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Your love might be closer than you think...
        </h1>
        <div>
          <Button
            className={styles.btnSignUp}
            variant={Button.VARIANT_TRANSPARENT_BORDERED}
          >
            sign up
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HomeHero
