import React from 'react'
import styles from './Avatar.scss'
import { getCloudinaryUrlFromPublicId } from 'utils/cloudinary'
import cx from 'classnames'

const SIZE_S = 'size-s'
const SIZE_M = 'size-m'

const getDimensionsFromSize = size => {
  if (size === SIZE_M) {
    return [140, 140]
  } else if (size === SIZE_S) {
    return [45, 45]
  }

  throw new Error('Invalid size specified: ' + size)
}

const getInitials = (user) => {
  const firstName = user.firstName || 'A'
  const lastName = user.lastName || ' '

  return `${firstName[0]}${lastName[0]}`
}

const Avatar = ({
  user,
  size = SIZE_S,
  className,
  isRounded = true,
  ...props
}) => {
  const firstPhotoCloudinaryPublicId = user?.photos?.[0]?.cloudinaryPublicId

  if (!firstPhotoCloudinaryPublicId) {
    return (
      <div
        className={cx(styles.component, styles.empty, {
          [className]: className,
          [styles.isRounded]: isRounded,
          [styles[size]]: size
        })}
        {...props}
      >
        <div className={styles.initials}>
          {getInitials(user)}
        </div>
      </div>
    )
  }

  const [width, height] = getDimensionsFromSize(size)

  const cloudinaryUrl = getCloudinaryUrlFromPublicId(firstPhotoCloudinaryPublicId, [
    `w_${width}`,
    `h_${height}`,
    'c_thumb',
    'g_face',
    'f_auto',
    'q_100'
  ])

  return (
    <div
      className={cx(styles.component, {
        [className]: className,
        [styles.isRounded]: isRounded,
        [styles[size]]: size
      })}
      style={{
        backgroundImage: `url(${cloudinaryUrl})`,
        width,
        height
      }}
      {...props}
    />
  )
}

Avatar.SIZE_S = SIZE_S
Avatar.SIZE_M = SIZE_M

export default Avatar
