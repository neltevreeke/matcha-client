import React from 'react'
import styles from './SettingsInterestTags.scss'

import { useDispatch, useSelector } from 'react-redux'
import { update } from 'actions/users'
import { getUser } from 'selectors/user'

const predefinedInterests = [{
  label: 'Golf'
}, {
  label: 'Music Production'
}, {
  label: '3D printing'
}, {
  label: 'Acting'
}, {
  label: 'Aeromodeling'
}, {
  label: 'Air sports'
}, {
  label: 'Airbrushing'
}, {
  label: 'Airsoft'
}, {
  label: 'Beadwork'
}, {
  label: 'Beatboxing'
}, {
  label: 'BMX'
}, {
  label: 'Bowling'
}, {
  label: 'Boxing'
}, {
  label: 'Collecting'
}, {
  label: 'Curling'
}]

const SettingsInterestTags = () => {
  const user = useSelector(getUser)
  const dispatch = useDispatch()

  const handleOnClickTag = index => () => {
    const interests = user.interests.filter(interest => user.interests[index].label !== interest.label)

    dispatch(update({
      interests
    }))
  }

  const handleOnClickPredefinedInterest = (label) => () => {
    const uniqueTag = user.interests.some(i => i.label === label)

    if (uniqueTag) {
      return
    }

    const interests = [
      ...user.interests,
      {
        label
      }
    ]

    dispatch(update({
      interests
    }))
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
              #{tag.label}
            </div>
          )
        })}
      </div>
      <div className={styles.component}>
        <p>Click on an interests to add it to your interests</p>
        <div className={styles.tagContainer}>
          {predefinedInterests.map((interest, index) => {
            return (
              <div
                key={index}
                className={styles.predefinedInterest}
                onClick={handleOnClickPredefinedInterest(interest.label)}
              >
                #{interest.label}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SettingsInterestTags
