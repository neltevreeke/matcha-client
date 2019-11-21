import React from 'react'
import styles from './SettingsInterestTags.scss'
import FormAddInterestTag from './FormAddInterestTag/FormAddInterestTag'

import { useDispatch, useSelector } from 'react-redux'
import { update } from 'actions/users'
import {
  getUpdateIsLoading,
  getUser
} from 'selectors/user'

const SettingsInterestTags = () => {
  const updateIsLoading = useSelector(getUpdateIsLoading)
  const user = useSelector(getUser)
  const dispatch = useDispatch()

  const handleFormSubmit = ({ tag }, { resetForm }) => {
    const interests = [
      ...user.interests,
      {
        label: tag
      }
    ]

    dispatch(update({
      interests
    }))

    resetForm()
  }

  const handleOnClickTag = index => () => {

  }

  return (
    <div className={styles.component}>
      <div className={styles.tagContainer}>
        {user.interests.map((tag, index) => {
          return (
            <div
              key={index}
              className={styles.tag}
              onClick={handleOnClickTag(index)}
            >
              {tag.label}
            </div>
          )
        })}
      </div>
      <div className={styles.inputComponent}>
        <FormAddInterestTag
          onSubmit={handleFormSubmit}
          isSubmitting={updateIsLoading}
          // error={error}
        />
      </div>
    </div>
  )
}

export default SettingsInterestTags
