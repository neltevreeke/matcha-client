import * as config from 'config'
import * as CloudinaryUploadPreset from 'constants/CloudinaryUploadPreset'
import { cloudinarySign } from 'api/cloudinary'

export const uploadImage = async ({
  image
}) => {
  const timestamp = +new Date()
  const uploadPreset = CloudinaryUploadPreset.USER_PHOTOS

  const { signature } = await cloudinarySign({
    timestamp,
    uploadPreset
  })

  const form = new FormData()

  form.append('file', image)
  form.append('upload_preset', uploadPreset)
  form.append('signature', signature)
  form.append('api_key', config.CLOUDINARY_KEY)
  form.append('timestamp', timestamp)

  const response = await fetch(`https://api.cloudinary.com/v1_1/${config.CLOUDINARY_NAME}/image/upload`, {
    body: form,
    method: 'POST'
  }).then((res) => res.json().then((body) => [
    body,
    res
  ]))

  const [body] = response
  return body
}

export const getCloudinaryUrlFromPublicId = (publicId, params = []) => {
  return `https://res.cloudinary.com/${config.CLOUDINARY_NAME}/image/upload/${params.join(',')}/${publicId}.jpg`
}
