import request from '../utils/request'

export const newActivity = (activity) => {
  return request('activities', {
    method: 'POST',
    body: activity
  })
}
