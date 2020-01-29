import React from 'react'
import styles from './SelectedMatchProfile.scss'
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel'
import Avatar from '../Avatar/Avatar'
import Button from 'components/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import {
  matchConnect,
  matchDisconnect
} from 'actions/users'
import {
  getConnectedMatches
} from '../../selectors/user'
import cx from 'classnames'
import { getIsConnected } from '../../utils/matches'

const SelectedMatchProfile = ({
  selectedMatch,
  className,
  onDisconnect
}) => {
  const dispatch = useDispatch()
  const connectedMatches = useSelector(getConnectedMatches)

  if (!selectedMatch) {
    return null
  }

  const connectedMatchRoom = connectedMatches?.find(cM => {
    if (cM.likedUserId === selectedMatch._id) {
      return cM.room
    }
  })

  const {
    _id: potentialMatchId,
    firstName,
    lastName,
    age,
    biography,
    photos,
    interests,
    fameRating
  } = selectedMatch

  const isConnected = getIsConnected(potentialMatchId, connectedMatches)

  const handleOnConnectClick = selectedMatch => () => {
    dispatch(matchConnect(selectedMatch._id))
  }

  const handleOnDisconnectClick = selectedMatch => () => {
    const hasConfirmed = window.confirm('Are you sure you want to disconnect this person?')

    if (!hasConfirmed) {
      return
    }

    dispatch(matchDisconnect({
      userId: selectedMatch._id,
      room: connectedMatchRoom.room
    }))

    onDisconnect && onDisconnect()
  }

  return (
    <div
      className={cx(styles.component, {
        [className]: className
      })}
    >
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
          Name: {firstName} {lastName}
        </p>
        <p>
          Age: {age} years old
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
      {!isConnected ? (
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
      ) : (
        <Button
          variant={Button.VARIANT_DEFAULT_RED}
          onClick={handleOnDisconnectClick(selectedMatch)}
        >
          <FontAwesomeIcon
            className={styles.icon}
            icon='unlink'
          />
          disconnect
        </Button>
      )}

    </div>
  )
}

export default SelectedMatchProfile
