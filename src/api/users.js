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

export const update = ({
  firstName,
  lastName,
  email,
  age,
  gender,
  biography
}) => {
  return request('update', {
    method: 'POST',
    body: {
      firstName,
      lastName,
      email,
      age,
      gender,
      biography
    }
  })
}

export const addInterestTag = ({
  tag
}) => {
  return request('addinterest', {
    method: 'POST',
    body: {
      tag
    }
  })
}
