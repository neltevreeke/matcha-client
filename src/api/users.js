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

export const matchConnect = (userId) => {
  return request('matches', {
    method: 'POST',
    body: {
      userId
    }
  })
}

export const matchDisconnect = ({ userId, room }) => {
  return request('matches', {
    method: 'DELETE',
    body: {
      userId,
      room
    }
  })
}

export const getConnectedMatches = () => {
  return request('connected-matches', {
    method: 'GET'
  })
}
