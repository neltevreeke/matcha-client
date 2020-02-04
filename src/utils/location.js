import request from 'utils/request'

export const getPosition = () => new Promise(resolve => {
  navigator.geolocation.getCurrentPosition((position) => {
    resolve({
      lat: position.coords.latitude,
      long: position.coords.longitude
    })
  }, async () => {
    const { lat, long } = await request('location', {
      method: 'GET'
    })

    resolve({
      lat,
      long
    })
  })
})
