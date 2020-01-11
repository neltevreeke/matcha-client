import request from '../utils/request'

export const getMatches = () => {
  return request('matches', {
    method: 'GET'
  })
}
