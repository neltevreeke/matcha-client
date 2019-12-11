import React from 'react'
import styles from './SettingsLocation.scss'
import { getPosition } from 'utils/location'

const SettingsLocation = () => {
  getPosition()

  return (
    <div className={styles.component}>
      Location
    </div>
  )
}

export default SettingsLocation
