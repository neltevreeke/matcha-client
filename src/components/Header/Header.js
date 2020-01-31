import React from 'react'
import styles from './Header.scss'
import { Link } from 'react-router-dom'
import * as Routes from 'constants/Routes'

import Button from 'components/Button/Button'
import ModalLogin from 'components/ModalLogin/ModalLogin'
import ModalSignUp from 'components/ModalSignUp/ModalSignUp'
import UserDropdownMenu from 'components/UserDropdownMenu/UserDropdownMenu'

import { useModal } from 'react-modal-hook'
import { useSelector, useDispatch } from 'react-redux'

import { getUser } from 'selectors/user'
import { getIsMenuOpen } from 'selectors/menu'

import { menuOpen, menuClose } from 'actions/menu'
import Avatar from '../Avatar/Avatar'
import HeaderNotifiableLink from '../HeaderNotifiableLink/HeaderNotifiableLink'

const Header = () => {
  const user = useSelector(getUser)
  const isMenuOpen = useSelector(getIsMenuOpen)
  const dispatch = useDispatch()
  const isLoggedIn = !!user

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

  const handleAvatarClick = () => {
    if (isMenuOpen) {
      dispatch(menuClose())
    }

    if (!isMenuOpen) {
      dispatch(menuOpen())
    }
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
        {isLoggedIn ? (
          <>
            <HeaderNotifiableLink
              unreadCount={6}
              to={Routes.ACTIVITIES}
              label='activities'
            />
            <Link
              to={Routes.MATCHES}
              className={styles.link}
            >
              matches
            </Link>
            <Avatar
              onClick={handleAvatarClick}
              user={user}
              size={Avatar.SIZE_S}
              backgroundClassName={styles.avatar}
            />
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
      {isMenuOpen && (
        <UserDropdownMenu />
      )}

    </div>
  )
}

export default Header
