import React from 'react'
import styles from './SelectedMatchProfile.scss'
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel'
import Avatar from '../Avatar/Avatar'

const SelectedMatchProfile = ({
  selectedMatch
}) => {
  if (!selectedMatch) {
    return null
  }

  const biography = selectedMatch?.biography

  return (
    <div className={styles.component}>
      <div className={styles.slider}>
        {selectedMatch.photos?.length > 0 ? (
          <PhotoCarousel
            photos={selectedMatch.photos}
          />
        ) : (
          <Avatar
            user={selectedMatch}
            size={Avatar.SIZE_M}
            isRounded={false}
          />
        )}
      </div>
      <div className={styles.matchInfo}>
        <h3 className={styles.SectionTitle}>personal details</h3>
        <p>Name: {selectedMatch.firstName} {selectedMatch.lastName}</p>
        <p>Age: {selectedMatch.age} years old</p>

        <h3 className={styles.SectionTitle}>biography</h3>

        {biography
          ? (<p>
            {biography}
          </p>) : (
               <p className={styles.placeholder}>
              This user does not have a biography yet.
            </p>)}

        <h3 className={styles.SectionTitle}>profile information</h3>
        {/* how far away the person is
              last seen online etc
          */}

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
