import React from 'react'
import styles from './SettingsSearchFilters.scss'
import FormUpdateSearchFilters from './FormUpdateSearchFilters/FormUpdateSearchFilters'
import { useDispatch, useSelector } from 'react-redux'

import { update } from 'actions/users'
import {
  getUpdateIsLoading,
  getUser
} from 'selectors/user'

const getInitialValuesFromUser = user => {
  // example :
  // return {
  //   ageRange: [user.minAge, user.maxAge]
  // }

  return {
    age: [18, 25],
    distance: [0, 25],
    commonTags: [0, 3],
    fameRating: [0, 100],
    genderPreference: ''
  }
}

const SettingsSearchFilters = () => {
  const user = useSelector(getUser)
  const updateIsLoading = useSelector(getUpdateIsLoading)
  const dispatch = useDispatch()
  const initialValues = getInitialValuesFromUser(user)

  const handleFormSubmit = (values) => {
    const [minAge, maxAge] = values.age
    const [minDistance, maxDistance] = values.distance
    const [minTags, maxTags] = values.commonTags
    const [minFameRating, maxFameRating] = values.fameRating
    const genderPreference = values.genderPreference

    dispatch(update({
      minAge,
      maxAge,
      minDistance,
      maxDistance,
      minTags,
      maxTags,
      minFameRating,
      maxFameRating,
      genderPreference
    }))
  }

  return (
    <div className={styles.component}>
      <FormUpdateSearchFilters
        onSubmit={handleFormSubmit}
        isSubmitting={updateIsLoading}
        initialValues={initialValues}
      />
    </div>
  )
}

export default SettingsSearchFilters
