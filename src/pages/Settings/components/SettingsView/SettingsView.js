import React from 'react'
import styles from './SettingsView.scss'
import Page from 'components/Page/Page'
import { Switch, Redirect, Route } from 'react-router-dom'
import SettingsMenu from '../SettingsMenu/SettingsMenu'
import * as Routes from 'constants/Routes'

import SettingsProfile from '../SettingsProfile/SettingsProfile'
import SettingsPictures from '../SettingsPictures/SettingsPictures'

const SettingsView = () => {
  return (
    <Page>
      <div className={styles.component}>
        <div className={styles.menu}>
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
          </Switch>
        </div>
      </div>
    </Page>
  )
}

export default SettingsView
