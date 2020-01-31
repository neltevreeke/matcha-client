import React, {
  useEffect,
  useState
} from 'react'
import styles from './PotentialMatches.scss'

import { useDispatch, useSelector } from 'react-redux'
import { potentialMatches } from 'actions/users'

import {
  getConnectedMatches,
  getPotentialMatches,
  getPotentialMatchesIsLoaded
} from 'selectors/user'

import PotentialMatch from '../PotentialMatch/PotentialMatch'
import PageSpinner from 'components/PageSpinner/PageSpinner'
import { getOnlineUsers } from 'selectors/onlineUsers'
import PotentialMatchesFilter from '../PotentialMatchesFilter/PotentialMatchesFilter'

const PotentialMatches = ({
  setSelectedMatch,
  selectedMatch,
  ...props
}) => {
  const dispatch = useDispatch()
  const potentialMatchesList = useSelector(getPotentialMatches)
  const isLoaded = useSelector(getPotentialMatchesIsLoaded)
  const onlineUsers = useSelector(getOnlineUsers)
  const connectedMatches = useSelector(getConnectedMatches)
  const [sortBy, setSortBy] = useState(null)

  useEffect(() => {
    dispatch(potentialMatches({
      sortBy
    }))
  }, [
    sortBy
  ])

  if (!isLoaded) {
    return (
      <PageSpinner />
    )
  }

  const handlePotentialMatchOnClick = potentialMatch => () => {
    if (selectedMatch === potentialMatch) {
      setSelectedMatch(null)
      return null
    }

    setSelectedMatch(potentialMatch)
  }

  return (
    <>
      <PotentialMatchesFilter
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <div className={styles.component}>
        {potentialMatchesList.map((potentialMatch, index) => {
          const isConnected = connectedMatches?.some(connectedMatch => connectedMatch.likedUserId === potentialMatch._id)

          return (
            <PotentialMatch
              onlineUsers={onlineUsers}
              key={index}
              potentialMatch={potentialMatch}
              onClick={handlePotentialMatchOnClick(potentialMatch)}
              isConnected={isConnected}
            />
          )
        })}
      </div>
    </>
  )
}

export default PotentialMatches
