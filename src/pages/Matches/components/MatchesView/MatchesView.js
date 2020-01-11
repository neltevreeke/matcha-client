import React, { useState, useEffect } from 'react'
import styles from './MatchesView.scss'
import Page from 'components/Page/Page'
import MatchesList from '../MatchesList/MatchesList'
import Chat from '../Chat/Chat'
import SelectedMatchProfile from 'components/SelectedMatchProfile/SelectedMatchProfile'
import {
  useDispatch,
  useSelector
} from 'react-redux'
import {
  getIsMatchesLoaded,
  getMatches
} from 'selectors/matches'
import PageSpinner from 'components/PageSpinner/PageSpinner'
import { loadMatches } from 'actions/matches'
import { joinRoom } from '../../../../utils/sockets'

const MatchesView = () => {
  const dispatch = useDispatch()
  const [selectedMatch, setSelectedMatch] = useState(null)
  const isLoaded = useSelector(getIsMatchesLoaded)
  const matches = useSelector(getMatches)

  useEffect(() => {
    dispatch(loadMatches())
  }, [])

  useEffect(() => {
    if (!isLoaded) {
      return
    }

    setSelectedMatch(matches[0])
  }, [
    isLoaded
  ])

  useEffect(() => {
    if (!selectedMatch) {
      // eslint-disable-next-line no-useless-return
      return
    }

    joinRoom(selectedMatch.room)
  }, [
    selectedMatch
  ])

  if (!isLoaded || !selectedMatch) {
    return (
      <PageSpinner />
    )
  }

  return (
    <Page>
      <div className={styles.component}>
        <MatchesList
          matches={matches}
          setSelectedMatch={setSelectedMatch}
        />
        <Chat
          messages={[]}
          selectedMatch={selectedMatch}
        />
        <SelectedMatchProfile
          className={styles.selectedProfile}
          selectedMatch={selectedMatch.likedUserId}
        />
      </div>
    </Page>
  )
}

export default MatchesView
