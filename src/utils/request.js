import * as config from 'config'

const defaultHeaders = {
  'Content-Type': 'application/json'
}

// TODO: use when ready ;)
export const setTokenHeader = token => {
  defaultHeaders['x-token'] = token
}

export const clearTokenHeader = () => {
  delete defaultHeaders['x-token']
}

const request = (urlSegment, options) => {
  const url = config.API_URL + '/' + urlSegment

  if (options.body) {
    options.body = JSON.stringify(options.body)
  }

  options.headers = {
    ...defaultHeaders,
    ...options.headers || {}
  }

  return fetch(url, options)
}

export default request
