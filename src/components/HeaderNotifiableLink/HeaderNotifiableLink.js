import React from 'react'
import styles from './HeaderNotifiableLink.scss'
import { Link } from 'react-router-dom'

const HeaderNotifiableLink = ({
  unreadCount = 0,
  label,
  to,
  dropDown,
  ...props
}) => {
  return (
    <Link
      to={to}
      className={dropDown ? styles.dropdownMenuLink : styles.component}
      onClick={props.onClick}
    >
      {unreadCount > 0 && (
        <div className={dropDown ? styles.dropdownUnreadBullet : styles.unreadBullet}>
          {unreadCount}
        </div>
      )}
      {label}
    </Link>
  )
}

export default HeaderNotifiableLink
