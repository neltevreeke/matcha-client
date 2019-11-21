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

  const handleImageChange = async event => {
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
      <h1>
        Pictures
      </h1>
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
              style={{
                backgroundImage: `url(${url})`
              }}
            />
          )
        })}
        <EditableImage
          isUploading={isUploading || updateIsLoading}
          onChange={handleImageChange}
        />
      </div>
    </div>
  )
}

export default SettingsPictures
