import request from '../utils/request'

export const getRoomMessages = (roomId) => {
  return request('rooms/' + roomId + '/message', {
    method: 'GET'
  })
}
