import React from 'react'
import styles from './UserDropdownMenu.scss'
import * as Routes from 'constants/Routes'
import { NavLink } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { logout } from 'actions/users'
import { menuClose } from 'actions/menu'

const UserDropdownMenu = () => {
  const dispatch = useDispatch()
  let expandMenuForIphone = false

  if (window.matchMedia('screen and (max-width: 667px) and (min-width: 375px)').matches) {
    expandMenuForIphone = !expandMenuForIphone
  }

  const handleBtnLogoutClick = () => {
    handleClickInMenu()
    dispatch(logout())
  }

  const handleClickInMenu = () => {
    dispatch(menuClose())
  }

  const handleOnMouseLeave = () => {
    dispatch(menuClose())
  }

  if (expandMenuForIphone) {
    return (
      <div
        className={styles.component}
        onMouseLeave={handleOnMouseLeave}
      >
        <NavLink
          className={styles.dropdownMenuLink}
          to={Routes.MATCHES}
          onClick={handleClickInMenu}
        >
          matches
        </NavLink>
        <NavLink
          className={styles.dropdownMenuLink}
          to={Routes.ACTIVITIES}
          onClick={handleClickInMenu}
        >
          activities
        </NavLink>
        <NavLink
          className={styles.dropdownMenuLink}
          to={Routes.SETTINGS}
          onClick={handleClickInMenu}
        >
          settings
        </NavLink>
        <NavLink
          className={styles.dropdownMenuLink}
          onClick={handleBtnLogoutClick}
          to={Routes.HOME}
        >
          log out
        </NavLink>
      </div>
    )
  } else {
    return (
      <div
        className={styles.component}
        onMouseLeave={handleOnMouseLeave}
      >
        <NavLink
          className={styles.dropdownMenuLink}
          to={Routes.SETTINGS}
          onClick={handleClickInMenu}
        >
          settings
        </NavLink>
        <NavLink
          className={styles.dropdownMenuLink}
          onClick={handleBtnLogoutClick}
          to={Routes.HOME}
        >
          log out
        </NavLink>
      </div>
    )
  }
}

export default UserDropdownMenu
