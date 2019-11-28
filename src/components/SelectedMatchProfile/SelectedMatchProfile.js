import React from 'react'
import styles from './SelectedMatchProfile.scss'
import PhotoSlider from '../PhotoSlider/PhotoSlider'

const SelectedMatchProfile = ({
  selectedMatch
}) => {
  if (!selectedMatch) {
    return null
  }

  return (
    <div className={styles.component}>
      <div className={styles.slider}>
        <PhotoSlider
          photos={selectedMatch.photos}
        />
      </div>
      <div className={styles.matchInfo}>
        <h3 className={styles.SectionTitle}>personal details</h3>
        <p>Name: {selectedMatch.firstName} {selectedMatch.lastName}</p>
        <p>Age: {selectedMatch.age} years old</p>

        <h3 className={styles.SectionTitle}>biography</h3>
        <p>{selectedMatch.biography}</p>

        <h3 className={styles.SectionTitle}>profile information</h3>

        <h3 className={styles.SectionTitle}>interest tags</h3>
        <div className={styles.interestTagsContainer}>
          {selectedMatch.interests.map((interest, index) => {
            return (
              <div
                key={index}
                className={styles.interestTag}
              >
                {interest.label}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SelectedMatchProfile
