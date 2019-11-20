import React from 'react'
import styles from './SettingsMenu.scss'
import { NavLink } from 'react-router-dom'
import * as Routes from '../../../../constants/Routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const links = [{
  to: Routes.SETTINGS_PROFILE,
  icon: 'user',
  label: 'user details'
}, {
  to: Routes.SETTINGS_PICTURES,
  icon: 'image',
  label: 'pictures'
}, {
  to: Routes.SETTINGS_INTEREST_TAGS,
  icon: 'hashtag',
  label: 'interest tags'
}, {
  to: Routes.SETTINGS_SEARCH_FILTERS,
  icon: 'filter',
  label: 'search filters'
}, {
  to: Routes.SETTINGS_LOCATION,
  icon: 'map-marked-alt',
  label: 'location'
}, {
  to: Routes.SETTINGS_NOTIFICATIONS,
  icon: 'bell',
  label: 'email notifications'
}]

const SettingsMenu = () => {
  return (
    <div className={styles.component}>
      {links.map((link, index) => {
        return (
          <NavLink
            key={index}
            className={styles.settingsMenuLink}
            activeClassName={styles.settingsMenuLinkActive}
            to={link.to}
          >
            <FontAwesomeIcon
              className={styles.menuIcon}
              icon={link.icon}
            />
            {link.label}
          </NavLink>
        )
      })}
    </div>
  )
}

export default SettingsMenu
