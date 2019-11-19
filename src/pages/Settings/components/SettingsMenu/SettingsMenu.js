import React from 'react'
import styles from './SettingsMenu.scss'
import { NavLink } from 'react-router-dom'
import * as Routes from '../../../../constants/Routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SettingsMenu = () => {
  return (
    <div className={styles.component}>
      <NavLink
        className={styles.settingsMenuLink}
        activeStyle={{ background: '#e4e0df' }}
        to={Routes.SETTINGS_PROFILE}
      >
        <FontAwesomeIcon
          className={styles.menuIcon}
          icon='user'
        />
        user details
      </NavLink>
      <NavLink
        className={styles.settingsMenuLink}
        activeStyle={{ background: '#e4e0df' }}
        to={Routes.SETTINGS_PICTURES}
      >
        <FontAwesomeIcon
          className={styles.menuIcon}
          icon='image'
        />
        pictures
      </NavLink>
      <NavLink
        className={styles.settingsMenuLink}
        activeStyle={{ background: '#e4e0df' }}
        to={Routes.SETTINGS_INTEREST_TAGS}
      >
        <FontAwesomeIcon
          className={styles.menuIcon}
          icon='hashtag'
        />
        interest tags
      </NavLink>
      <NavLink
        className={styles.settingsMenuLink}
        activeStyle={{ background: '#e4e0df' }}
        to={Routes.SETTINGS_SEARCH_FILTERS}
      >
        <FontAwesomeIcon
          className={styles.menuIcon}
          icon='filter'
        />
        search filters
      </NavLink>
      <NavLink
        className={styles.settingsMenuLink}
        activeStyle={{ background: '#e4e0df' }}
        to={Routes.SETTINGS_LOCATION}
      >
        <FontAwesomeIcon
          className={styles.menuIcon}
          icon='map-marked-alt'
        />
        location
      </NavLink>
      <NavLink
        className={styles.settingsMenuLink}
        activeStyle={{ background: '#e4e0df' }}
        to={Routes.SETTINGS_NOTIFICATIONS}
      >
        <FontAwesomeIcon
          className={styles.menuIcon}
          icon='bell'
        />
        email notifications
      </NavLink>
    </div>
  )
}

export default SettingsMenu
