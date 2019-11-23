import React from 'react'
import styles from './Header.scss'
import { Link } from 'react-router-dom'
import * as Routes from 'constants/Routes'

import Button from 'components/Button/Button'
import ModalLogin from 'components/ModalLogin/ModalLogin'
import ModalSignUp from 'components/ModalSignUp/ModalSignUp'
import UserDropdownMenu from 'components/UserDropdownMenu/UserDropdownMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  getCloudinaryUrlFromPublicId
} from 'utils/cloudinary'

import { useModal } from 'react-modal-hook'
import { useSelector, useDispatch } from 'react-redux'

import { getUser } from 'selectors/user'
import { getIsMenuOpen } from 'selectors/menu'

import { menuOpen, menuClose } from 'actions/menu'

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
          <div
            onClick={handleAvatarClick}
          >
            {user.photos.length >= 1 && user.photos.slice(0, 1, user.photos).map((photo, index) => {
              const url = getCloudinaryUrlFromPublicId(photo.cloudinaryPublicId, [
                'w_40',
                'h_40',
                'c_thumb',
                'g_face',
                'f_auto',
                'q_100'
              ])

              return (
                <div
                  key={index}
                  className={styles.avatar}
                  style={{
                    backgroundImage: `url(${url})`
                  }}
                />
              )
            })}
            {user.photos.length === 0 &&
              <FontAwesomeIcon
                icon='user'
                className={styles.icon}
              />}
          </div>
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
