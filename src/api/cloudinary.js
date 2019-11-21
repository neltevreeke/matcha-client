import request from 'utils/request'

export const cloudinarySign = (body) => {
  return request('cloudinary/sign', {
    method: 'POST',
    body
  })
}
