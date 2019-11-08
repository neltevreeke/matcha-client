import React from 'react'
import styles from './Header.scss'
import { Link } from 'react-router-dom'
import * as Routes from 'constants/Routes'
import Button from 'components/Button/Button'
import ModalLogin from 'components/ModalLogin/ModalLogin'
import ModalSignUp from 'components/ModalSignUp/ModalSignUp'
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

  const [showModalSignUp, hideModalSignUp] = useModal(({
    in: isOpen,
    onExited
  }) => {
    return (
      <ModalSignUp
        isOpen={isOpen}
        onExited={onExited}
        hideModal={hideModalSignUp}
      />
    )
  })

  const handleBtnLoginClick = () => {
    showModalLogin()
  }

  const handleBtnSignUpClick = () => {
    showModalSignUp()
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
          onClick={handleBtnSignUpClick}
        >
          sign up
        </Button>
      </div>
    </div>
  )
}

export default Header
