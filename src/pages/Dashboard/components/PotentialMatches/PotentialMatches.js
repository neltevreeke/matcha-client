import React, { useEffect } from 'react'
import styles from './PotentialMatches.scss'

import { useDispatch, useSelector } from 'react-redux'
import { potentialMatches } from 'actions/users'

import {
  getPotentialMatches,
  // getPotentialMatchesIsLoading,
  // getPotentialMatchesError,
  getPotentialMatchesIsLoaded
} from '../../../../selectors/user'
import PotentialMatch from '../PotentialMatch/PotentialMatch'
import PageSpinner from '../../../../components/PageSpinner/PageSpinner'

const PotentialMatches = () => {
  const dispatch = useDispatch()
  // const isLoading = useSelector(getPotentialMatchesIsLoading)
  // const error = useSelector(getPotentialMatchesError)
  const potentialMatchesList = useSelector(getPotentialMatches)
  const isLoaded = useSelector(getPotentialMatchesIsLoaded)

  useEffect(() => {
    dispatch(potentialMatches())
  }, [])

  if (!isLoaded) {
    return (
      <PageSpinner />
    )
  }

  return (
    <div className={styles.component}>
      {potentialMatchesList.map((potentialMatch, index) => {
        return (
          <PotentialMatch
            key={index}
            potentialMatch={potentialMatch}
          />
        )
      })}
    </div>
  )
}

export default PotentialMatches
