import React from 'react'
import styles from './SettingsInterestTags.scss'
import FormAddInterestTag from './FormAddInterestTag/FormAddInterestTag'

const tags = [{
  label: 'anus'
}, {
  label: 'Coding'
}, {
  label: 'test test'
}, {
  label: 'hoi'
}, {
  label: 'Ditiseenheellangwoord'
}]

const SettingsInterestTags = () => {
  return (
    <div className={styles.component}>
      <div className={styles.tagContainer}>
        {tags.map((tag, index) => {
          return (
            <div
              key={index}
              className={styles.tag}
            >
              {tag.label}
            </div>
          )
        })}
      </div>
      <div className={styles.inputComponent}>
        <FormAddInterestTag />
      </div>
    </div>
  )
}

export default SettingsInterestTags
