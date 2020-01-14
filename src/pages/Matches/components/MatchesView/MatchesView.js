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
import { loadRoomMessages } from 'actions/roomMessage'
import { getIsMessagesLoaded, getRoomMessages } from '../../../../selectors/roomMessages'

const MatchesView = () => {
  const dispatch = useDispatch()
  const [selectedMatch, setSelectedMatch] = useState(null)
  const isLoaded = useSelector(getIsMatchesLoaded)
  const matches = useSelector(getMatches)
  const messages = useSelector(getRoomMessages)
  const messagesIsLoaded = useSelector(getIsMessagesLoaded)

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

  useEffect(() => {
    if (!isLoaded) {
      return
    }

    setSelectedMatch(matches[0])
  }, [
    isLoaded
  ])

  if (!isLoaded || !selectedMatch) {
    return (
      <PageSpinner />
    )
  }

  if (!messagesIsLoaded) {
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
          selectedMatch={selectedMatch.likedUserId}
        />
      </div>
    </Page>
  )
}

export default MatchesView
