import React from 'react'
import styles from './UserDropdownMenu.scss'
import * as Routes from 'constants/Routes'
import { NavLink } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { logout } from 'actions/users'
import { menuClose } from 'actions/menu'

const UserDropdownMenu = () => {
  const dispatch = useDispatch()

  const handleBtnLogoutClick = () => {
    handleClickInMenu()
    dispatch(logout())
  }

  const handleClickInMenu = () => {
    dispatch(menuClose())
  }

  return (
    <div className={styles.component}>
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
        to={Routes.SETTINGS}
      >
        log out
      </NavLink>
    </div>
  )
}

export default UserDropdownMenu
