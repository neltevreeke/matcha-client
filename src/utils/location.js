export const getPosition = () => new Promise(resolve => {
  navigator.geolocation.getCurrentPosition((position) => {
    resolve({
      lat: position.coords.latitude,
      long: position.coords.longitude
    })
  })
})
