import React, { useEffect } from 'react'
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
  getMatches,
  getSelectedMatch
} from 'selectors/matches'
import PageSpinner from 'components/PageSpinner/PageSpinner'
import { loadMatches } from 'actions/matches'
import { joinRoom } from 'utils/sockets'
import { loadRoomMessages } from 'actions/roomMessage'
import { getRoomMessages } from 'selectors/roomMessages'

const MatchesView = () => {
  const dispatch = useDispatch()
  const isLoaded = useSelector(getIsMatchesLoaded)
  const matches = useSelector(getMatches)
  const selectedMatch = useSelector(getSelectedMatch)

  const messages = useSelector(getRoomMessages)

  useEffect(() => {
    dispatch(loadMatches())
  }, [])

  useEffect(() => {
    if (!selectedMatch) {
      return
    }

    dispatch(loadRoomMessages(selectedMatch.room))
    joinRoom(selectedMatch.room)
  }, [
    selectedMatch
  ])

  const setSelectedMatch = match => {
    dispatch(setSelectedMatch(match))
  }

  if (!isLoaded) {
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
          messages={messages}
          selectedMatch={selectedMatch}
        />
        <SelectedMatchProfile
          className={styles.selectedProfile}
          selectedMatch={selectedMatch?.likedUserId}
        />
      </div>
    </Page>
  )
}

export default MatchesView
