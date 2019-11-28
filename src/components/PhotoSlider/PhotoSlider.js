import React from 'react'
import styles from './PhotoSlider.scss'
import { getCloudinaryUrlFromPublicId } from 'utils/cloudinary'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

const PhotoSlider = ({
  photos
}) => {
  return (
    <CarouselProvider
      naturalSlideWidth={340}
      naturalSlideHeight={340}
      totalSlides={photos.length}
      className={styles.carousel}
    >
      <Slider className={styles.slider}>
        {photos.map((photo, index) => {
          return (
            <Slide
              key={index}
              index={index}
              className={styles.slide}
            >
              <img src={
                getCloudinaryUrlFromPublicId(photo.cloudinaryPublicId, [
                  'w_350',
                  'h_350',
                  'c_thumb',
                  'g_face',
                  'f_auto',
                  'q_auto'
                ])
              }
              />
            </Slide>
          )
        })}
      </Slider>
    </CarouselProvider>
  )
}

export default PhotoSlider
