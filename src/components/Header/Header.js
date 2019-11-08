import React from 'react'
import styles from './Header.scss'
import { Link } from 'react-router-dom'
import * as Routes from 'constants/Routes'
import Button from 'components/Button/Button'
import ModalLogin from 'components/ModalLogin/ModalLogin'
import { useModal } from 'react-modal-hook'

const Header = () => {
  const [showModalLogin, hideModalLogin] = useModal(({
    in: isOpen,
    onExited
  }) => {
    return (
      <ModalLogin
        isOpen={isOpen}
        onExited={onExited}
        hideModal={hideModalLogin}
      />
    )
  })

  const handleBtnLoginClick = () => {
    showModalLogin()
  }

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
          onClick={handleBtnLoginClick}
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
