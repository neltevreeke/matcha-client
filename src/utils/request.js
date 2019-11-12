import * as config from 'config'

const defaultHeaders = {
  'Content-Type': 'application/json'
}

export const setTokenHeader = token => {
  defaultHeaders['x-token'] = token
}

export const clearTokenHeader = () => {
  delete defaultHeaders['x-token']
}

const request = async (urlSegment, options) => {
  const url = config.API_URL + '/' + urlSegment

  if (options.body) {
    options.body = JSON.stringify(options.body)
  }

  options.headers = {
    ...defaultHeaders,
    ...options.headers || {}
  }

  const res = await fetch(url, options)
  const jsonResponse = await res?.json() || null

  if (res.status !== 200) {
    const error = new Error()
    error.body = jsonResponse
    error.statusCode = res.status
    throw error
  }

  return jsonResponse
}

export default request
