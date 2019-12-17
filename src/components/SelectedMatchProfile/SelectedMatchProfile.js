import React from 'react'
import styles from './SelectedMatchProfile.scss'
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel'
import Avatar from '../Avatar/Avatar'
import Button from 'components/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { connectedMatch } from 'actions/users'
import {
  getUser
} from '../../selectors/user'

const SelectedMatchProfile = ({
  selectedMatch
}) => {
  const dispatch = useDispatch()
  const user = useSelector(getUser)

  if (!selectedMatch) {
    return null
  }

  const handleOnConnectClick = selectedMatch => () => {
    dispatch(connectedMatch({
      sourceUserId: user._id,
      likedUserId: selectedMatch._id
    }))
  }

  const {
    biography,
    photos,
    interests,
    fameRating,
    isConnected
  } = selectedMatch

  return (
    <div className={styles.component}>
      <div className={styles.slider}>
        {photos ? (
          <PhotoCarousel
            photos={selectedMatch.photos}
          />
        ) : (
          <Avatar
            user={selectedMatch}
            size={Avatar.SIZE_M}
            isRounded={false}
          />
        )}
      </div>
      <div className={styles.matchInfo}>
        <h3 className={styles.SectionTitle}>
          personal details
        </h3>
        <p>
          Name: {selectedMatch.firstName} {selectedMatch.lastName}
        </p>
        <p>
          Age: {selectedMatch.age} years old
        </p>
        {biography ? (
          <p>
            biography: {biography}
          </p>
        ) : (
          <p className={styles.placeholder}>
            biography: This user does not have a biography yet.
          </p>
        )}

        <h3 className={styles.SectionTitle}>
          profile information
        </h3>
        {/* 1. last seen online etc
            2. √ famerating
          */}
        <p>Famerating: {fameRating}</p>

        <h3 className={styles.SectionTitle}>
          interest tags
        </h3>
        <div className={styles.interestTagsContainer}>
          {interests ? selectedMatch.interests.map((interest, index) => {
            return (
              <div
                key={index}
                className={styles.interestTag}
              >
                #{interest.label}
              </div>
            )
          }) : (
            <p className={styles.placeholder}>
              This user does not have interest tags yet.
            </p>
          )}
        </div>
      </div>
      {!isConnected && (
        <Button
          variant={Button.VARIANT_DEFAULT}
          onClick={handleOnConnectClick(selectedMatch)}
        >
          <FontAwesomeIcon
            className={styles.icon}
            icon='bolt'
          />
          connect
        </Button>
      )}
    </div>
  )
}

export default SelectedMatchProfile
