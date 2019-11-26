import request from 'utils/request'

export const me = () => {
  return request('me', {
    method: 'GET'
  })
}

export const login = ({
  email,
  password
}) => {
  return request('login', {
    method: 'POST',
    body: {
      email,
      password
    }
  })
}

export const update = (body) => {
  return request('update', {
    method: 'POST',
    body
  })
}

export const potentialMatches = () => {
  return request('potential-matches', {
    method: 'GET'
  })
}
