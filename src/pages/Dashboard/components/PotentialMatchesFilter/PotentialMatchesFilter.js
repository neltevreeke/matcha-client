import React from 'react'
import styles from './PotentialMatchesFilter.scss'
import { Select } from 'components/FormElements'

const sortByOptions = [{
  label: 'Age',
  value: 'age'
}, {
  label: 'Location',
  value: 'location'
}, {
  label: 'Fame rating',
  value: 'fame-rating'
}, {
  label: 'Tags in common',
  value: 'tags-in-common'
}]

const PotentialMatchesFilter = ({
  sortBy,
  setSortBy
}) => {
  const handleSetFieldValue = (name, value) => {
    setSortBy(value)
  }

  return (
    <div className={styles.component}>
      <div className={styles.dropdown}>
        <Select
          name='sortBy'
          options={sortByOptions}
          field={{
            value: sortBy
          }}
          form={{
            setFieldValue: handleSetFieldValue
          }}
        />
      </div>
    </div>
  )
}

export default PotentialMatchesFilter
