import React from 'react'
import styles from './HeaderNotifiableLink.scss'
import { Link } from 'react-router-dom'

const HeaderNotifiableLink = ({
  unreadCount = 0,
  label,
  to
}) => {
  return (
    <Link
      to={to}
      className={styles.component}
    >
      {unreadCount > 0 && (
        <div className={styles.unreadBullet}>
          {unreadCount}
        </div>
      )}
      {label}
    </Link>
  )
}

export default HeaderNotifiableLink
