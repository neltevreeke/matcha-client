import React from 'react'
import styles from './PotentialMatch.scss'
import { getCloudinaryUrlFromPublicId } from '../../../../utils/cloudinary'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PotentialMatch = ({
  potentialMatch
}) => {
  let url

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

  if (!url) {
    return (
      <div className={styles.noPhotoProfile}>
        <FontAwesomeIcon
          className={styles.icon}
          icon='user'
        />
      </div>
    )
  }

  return (
    <div
      className={styles.component}
      style={{
        backgroundImage: `url(${url})`
      }}
    />
  )
}

export default PotentialMatch
