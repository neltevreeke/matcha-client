import React, { useEffect } from 'react'
import styles from './PotentialMatches.scss'
import { getCloudinaryUrlFromPublicId } from 'utils/cloudinary'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useDispatch, useSelector } from 'react-redux'
import { potentialMatches } from 'actions/users'

import {
  getPotentialMatches,
  // getPotentialMatchesIsLoading,
  // getPotentialMatchesError,
  getPotentialMatchesIsLoaded
} from '../../../../selectors/user'

const PotentialMatches = () => {
  const dispatch = useDispatch()
  // const isLoading = useSelector(getPotentialMatchesIsLoading)
  // const error = useSelector(getPotentialMatchesError)
  const potentialMatchesList = useSelector(getPotentialMatches)
  const isLoaded = useSelector(getPotentialMatchesIsLoaded)

  useEffect(() => {
    dispatch(potentialMatches())
  }, [])

  if (!isLoaded) {
    // TODO: show a page spinner...
    return null
  }

  return (
    <>
      {potentialMatchesList.map((potentialMatch, index) => {
        let url;

        if (potentialMatch.photos.length > 0) {
          url = getCloudinaryUrlFromPublicId(potentialMatch.photos[0].cloudinaryPublicId, [
            'w_140',
            'h_140',
            'c_thumb',
            'g_face',
            'f_auto',
            'q_100'
          ])
        }

        {return url ? (
          <div
            key={index}
            style={{
              backgroundImage: `url(${url})`,
              height: '140px',
              width: '140px',
              borderRadius: '3px',
              cursor: 'pointer'
            }}
          />
        ) : (
          <div
            key={index}
            className={styles.noPhotoProfile}
          >
            <FontAwesomeIcon
              className={styles.icon}
              icon='user'
            />
          </div>
        )}
      })}
    </>
  )
}

export default PotentialMatches
