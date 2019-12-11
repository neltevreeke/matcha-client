// import { request } from 'utils/request'

export const getPosition = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    const pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }

    // todo:
    // update user with geoLocation (long, lat) directly after log in or entering index.js
  })
}
