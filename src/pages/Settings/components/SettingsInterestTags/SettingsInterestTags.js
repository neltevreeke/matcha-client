import React from 'react'
import styles from './SettingsInterestTags.scss'
import FormAddInterestTag from './FormAddInterestTag/FormAddInterestTag'

import { useDispatch, useSelector } from 'react-redux'
import { addInterestTag } from 'actions/users'
import {
  getInterestTagsError,
  getInterestTagsIsLoading,
  getInterestTags
} from 'selectors/user'

const SettingsInterestTags = () => {
  const isLoading = useSelector(getInterestTagsIsLoading)
  const error = useSelector(getInterestTagsError)
  const interestTags = useSelector(getInterestTags)
  const dispatch = useDispatch()

  // eslint-disable-next-line no-console
  console.log(interestTags)

  const handleFormSubmit = ({ tag }) => {
    dispatch(addInterestTag({
      tag
    }))
  }

  return (
    <div className={styles.component}>
      <div className={styles.tagContainer}>
        {/* {interestTags.map((tag, index) => {
          return (
            <div
              key={index}
              className={styles.tag}
            >
              {tag.label}
            </div>
          )
        })} */}
      </div>
      <div className={styles.inputComponent}>
        <FormAddInterestTag
          onSubmit={handleFormSubmit}
          isSubmitting={isLoading}
          error={error}
        />
      </div>
    </div>
  )
}

export default SettingsInterestTags
