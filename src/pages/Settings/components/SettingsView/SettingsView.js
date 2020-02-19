import React from 'react'
import styles from './SettingsView.scss'
import Page from 'components/Page/Page'
import { Switch, Redirect, Route } from 'react-router-dom'
import SettingsMenu from '../SettingsMenu/SettingsMenu'
import * as Routes from 'constants/Routes'

import SettingsProfile from '../SettingsProfile/SettingsProfile'
import SettingsPictures from '../SettingsPictures/SettingsPictures'
import SettingsInterestTags from '../SettingsInterestTags/SettingsInterestTags'
import SettingsSearchFilters from '../SettingsSearchFilters/SettingsSearchFilters'
import SettingsLocation from '../SettingsLocation/SettingsLocation'
import SettingsEmailNotifications from '../SettingsEmailNotifications/SettingsEmailNotifications'
import SettingsBlockedUsers from '../SettingsBlockedUsers/SettingsBlockedUsers'
import { useDispatch, useSelector } from 'react-redux'
import { settingsMenuClose, settingsMenuOpen } from '../../../../actions/menu'
import { getIsSettingsMenuOpen } from 'selectors/menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SettingsView = () => {
  const isSettingsMenuOpen = useSelector(getIsSettingsMenuOpen)
  const dispatch = useDispatch()

  const showSettingsMenu = () => {
    if (!isSettingsMenuOpen) {
      dispatch(settingsMenuOpen())
    } else if (isSettingsMenuOpen) {
      dispatch(settingsMenuClose())
    }
  }

  const handleClickInMenu = () => {
    if (isSettingsMenuOpen) {
      dispatch(settingsMenuClose())
    }
  }

  return (
    <Page>
      <div
        className={styles.responsiveMenuControls}
      >
        <div
          className={styles.iconContainer}
          onClick={showSettingsMenu}
        >
          <FontAwesomeIcon
            className={styles.hamburgerIcon}
            icon='bars'
          />
        </div>
      </div>
      <div className={styles.component}>
        <div
          className={isSettingsMenuOpen ? styles.menu : styles.displaySettingsMenu}
          onClick={handleClickInMenu}
        >
          <SettingsMenu />
        </div>
        <div className={styles.content}>
          <Switch>
            <Redirect
              from={Routes.SETTINGS}
              exact
              to={Routes.SETTINGS_PROFILE}
            />
            <Route
              path={Routes.SETTINGS_PROFILE}
              component={SettingsProfile}
            />
            <Route
              path={Routes.SETTINGS_PICTURES}
              component={SettingsPictures}
            />
            <Route
              path={Routes.SETTINGS_INTEREST_TAGS}
              component={SettingsInterestTags}
            />
            <Route
              path={Routes.SETTINGS_SEARCH_FILTERS}
              component={SettingsSearchFilters}
            />
            <Route
              path={Routes.SETTINGS_LOCATION}
              component={SettingsLocation}
            />
            <Route
              path={Routes.SETTINGS_NOTIFICATIONS}
              component={SettingsEmailNotifications}
            />
            <Route
              path={Routes.SETTINGS_BLOCKED_USERS}
              component={SettingsBlockedUsers}
            />
          </Switch>
        </div>
      </div>
    </Page>
  )
}

export default SettingsView
