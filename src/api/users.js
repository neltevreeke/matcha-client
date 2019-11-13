import request from 'utils/request'

export const me = () => {
  return request('me', {
    method: 'GET'
  })
}
