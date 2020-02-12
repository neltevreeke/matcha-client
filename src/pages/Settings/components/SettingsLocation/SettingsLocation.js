import React from 'react'
import styles from './SettingsLocation.scss'
import FormUpdateLocation from './FormUpdateLocation/FormUpdateLocation'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../../../../actions/users'
import {
  getUpdateIsLoading,
  getUpdateError
} from 'selectors/user'

const SettingsLocation = () => {
  const dispatch = useDispatch()
  const isUpdateLoading = useSelector(getUpdateIsLoading)
  const updateError = useSelector(getUpdateError)

  const handleFormSubmit = ({ long, lat }) => {
    const coordinates = [lat, long]

    dispatch(update({
      loc: {
        type: 'Point',
        coordinates
      }
    }))
  }

  return (
    <div className={styles.component}>
      <FormUpdateLocation
        onSubmit={handleFormSubmit}
        isLoading={isUpdateLoading}
        error={updateError}
      />
    </div>
  )
}

export default SettingsLocation
