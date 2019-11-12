import useRequest from './useRequest'

const useMe = () => {
  return useRequest('me', {
    method: 'GET'
  })
}

export default useMe
