import React from 'react'
import styles from './SelectedMatchProfile.scss'
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel'
import Avatar from '../Avatar/Avatar'
import Button from 'components/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import {
  matchConnect,
  matchDisconnect,
  blockMatch, setSelectedPotentialMatch,
  matchReport
} from 'actions/users'
import {
  getConnectedMatches,
  getUser
} from '../../selectors/user'
import {
  getReportedUsers
} from 'selectors/reportedUsers'
import cx from 'classnames'
import {
  getIsConnected,
  getIsReported
} from '../../utils/matches'
import * as ActivityType from '../../constants/ActivityType'
import { postNewActivity } from 'actions/activity'
import moment from 'moment'
import * as EventType from 'constants/EventType'
import { sendEvent } from 'utils/sockets'

const SelectedMatchProfile = ({
  selectedMatch,
  className,
  onDisconnect
}) => {
  const dispatch = useDispatch()
  const connectedMatches = useSelector(getConnectedMatches)
  const reportedUsers = useSelector(getReportedUsers)
  const user = useSelector(getUser)

  if (!selectedMatch) {
    return null
  }

  const {
    _id: potentialMatchId,
    firstName,
    lastName,
    age,
    biography,
    photos,
    interests,
    fameRating,
    lastSeen
  } = selectedMatch

  const connectedMatchRoom = connectedMatches?.find(cM => {
    if (cM.likedUserId === selectedMatch._id) {
      return cM.room
    }
  })

  const isConnected = getIsConnected(potentialMatchId, connectedMatches)
  const isReported = getIsReported(potentialMatchId, reportedUsers)
  const hasPhoto = user.photos.length < 0 || user.photos.length === 0
  const mDate = moment.utc(lastSeen)
  const showCarousel = photos?.length > 0

  const handleOnBlockClick = selectedMatch => () => {
    dispatch(blockMatch(selectedMatch._id))

    dispatch({
      type: ActivityType.ACTIVITY_TYPE_BLOCK,
      targetUserId: selectedMatch._id
    })

    if (isConnected) {
      dispatch(matchDisconnect({
        userId: selectedMatch._id,
        room: connectedMatchRoom?.room
      }))
    }

    sendEvent({
      type: EventType.EVENT_TYPE_BLOCK,
      data: selectedMatch._id
    })

    dispatch(setSelectedPotentialMatch(null))
  }

  const handleOnConnectClick = selectedMatch => () => {
    dispatch(matchConnect(selectedMatch._id))

    dispatch(postNewActivity({
      type: ActivityType.ACTIVITY_TYPE_CONNECT,
      targetUserId: selectedMatch._id
    }))
  }

  const handleOnReportClick = selectedMatch => () => {
    dispatch(matchReport(selectedMatch._id))

    dispatch(postNewActivity({
      type: ActivityType.ACTIVITY_TYPE_REPORT,
      targetUserId: selectedMatch._id
    }))
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

    dispatch(postNewActivity({
      type: ActivityType.ACTIVITY_TYPE_DISCONNECT,
      targetUserId: selectedMatch._id,
      userId: user._id
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
        {showCarousel ? (
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
        <p>Last seen online: {mDate.format('DD-MM-YYYY HH:mm')}</p>

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
          disabled={hasPhoto}
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
      <div className={styles.blockAndReport}>
        <Button
          variant={Button.VARIANT_DEFAULT_RED}
          onClick={handleOnBlockClick(selectedMatch)}
        >
          <FontAwesomeIcon
            className={styles.icon}
            icon='ban'
          />
          block
        </Button>
        <Button
          variant={Button.VARIANT_DEFAULT_RED}
          onClick={handleOnReportClick(selectedMatch)}
          disabled={isReported}
        >
          <FontAwesomeIcon
            className={styles.icon}
            icon='flag'
          />
          report as fake
        </Button>
      </div>
    </div>
  )
}

export default SelectedMatchProfile
