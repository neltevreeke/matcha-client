import React, { useState } from 'react'
import styles from './SettingsPictures.scss'
import EditableImage from 'components/EditableImage/EditableImage'
import {
  getCloudinaryUrlFromPublicId,
  uploadImage
} from 'utils/cloudinary'
import { useDispatch, useSelector } from 'react-redux'
import { update } from 'actions/users'
import { getUser, getUpdateIsLoading } from 'selectors/user'

const SettingsPictures = () => {
  const [isUploading, setIsUploading] = useState(false)
  const user = useSelector(getUser)
  const updateIsLoading = useSelector(getUpdateIsLoading)
  const dispatch = useDispatch()

  const handleOnClickPhoto = index => () => {
    let deletedPhoto = null

    const photos = user.photos.filter(photo => {
      deletedPhoto = photo
      return user.photos[index] !== photo
    })

    dispatch(update({
      photos,
      deletedPhoto
    }))
  }

  const handleAddImageChange = async event => {
    const [image] = event.target.files

    setIsUploading(true)

    const {
      public_id: cloudinaryPublicId
    } = await uploadImage({
      image
    })

    const newUserPhotos = [
      ...user?.photos || [],
      {
        cloudinaryPublicId
      }
    ]

    dispatch(update({
      photos: newUserPhotos
    }))

    setIsUploading(false)
  }

  return (
    <div className={styles.component}>
      <div className={styles.avatarSection}>
        <p>
          Avatar
        </p>
        {user.photos.slice(0, 1, user.photos).map((photo, index) => {
          const url = getCloudinaryUrlFromPublicId(photo.cloudinaryPublicId, [
            'w_300',
            'f_auto',
            'q_auto'
          ])

          return (
            <div
              key={index}
              className={styles.avatar}
              style={{
                backgroundImage: `url(${url})`
              }}
            />
          )
        })}
      </div>
      <div className={styles.uploadedPhotosSection}>
        <p>
          Uploaded photos
        </p>
        <div className={styles.photos}>
          {user.photos.map((photo, index) => {
            const url = getCloudinaryUrlFromPublicId(photo.cloudinaryPublicId, [
              'w_300',
              'f_auto',
              'q_auto'
            ])

            return (
              <div
                key={index}
                className={styles.photo}
                onClick={handleOnClickPhoto(index)}
                style={{
                  backgroundImage: `url(${url})`
                }}
              >
                <div className={styles.photoOverlay} />
              </div>
            )
          })}
          {user.photos.length < 5 && <EditableImage
            isUploading={isUploading || updateIsLoading}
            onChange={handleAddImageChange}
          />}
        </div>
      </div>
    </div>
  )
}

export default SettingsPictures
