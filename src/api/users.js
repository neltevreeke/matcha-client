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

export const potentialMatches = ({ sortBy }) => {
  return request(`potential-matches?sortBy=${sortBy}`, {
    method: 'GET'
  })
}

export const deleteBlockedUser = (userId) => {
  return request('block-user', {
    method: 'DELETE',
    body: {
      blockedUserId: userId
    }
  })
}

export const postBlockMatch = (userId) => {
  return request('block-user', {
    method: 'POST',
    body: {
      blockedUserId: userId
    }
  })
}

export const getBlockedUsers = () => {
  return request('block-user', {
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

export const getActivities = () => {
  return request('activities', {
    method: 'GET'
  })
}

export const markActivitiesSeen = (activityIds) => {
  return request('activities/seen', {
    method: 'POST',
    body: {
      activityIds
    }
  })
}
