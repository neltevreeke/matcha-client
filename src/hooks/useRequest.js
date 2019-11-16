import { useState, useEffect } from 'react'
import request from 'utils/request'

const useRequest = (url, options, deps = []) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    (async () => {
      setError(null)
      setData(null)

      try {
        const data = await request(url, options)
        setData(data)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    })()
  }, deps)

  return {
    isLoading,
    error,
    data
  }
}

export default useRequest
