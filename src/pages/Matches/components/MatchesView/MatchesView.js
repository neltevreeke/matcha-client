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
import { loadMatches, setSelectedMatch } from 'actions/matches'
import { joinRoom } from 'utils/sockets'
import { loadRoomMessages } from 'actions/roomMessage'
import { getRoomMessages } from 'selectors/roomMessages'
import * as ActionTypes from 'constants/ActionTypes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MatchesView = () => {
  const dispatch = useDispatch()
  const isLoaded = useSelector(getIsMatchesLoaded)
  const matches = useSelector(getMatches)
  const selectedMatch = useSelector(getSelectedMatch)
  const messages = useSelector(getRoomMessages)
  let isShown = true

  useEffect(() => {
    dispatch(loadMatches())
  }, [])

  useEffect(() => {
    if (!selectedMatch) {
      dispatch({
        type: ActionTypes.ROOMMESSAGES_DUMP_MESSAGES
      })
      return
    }

    dispatch(loadRoomMessages(selectedMatch.room))
    joinRoom(selectedMatch.room)
  }, [
    selectedMatch
  ])

  const handleSetSelectedMatch = match => {
    dispatch(setSelectedMatch(match))
  }

  if (!isLoaded) {
    return (
      <PageSpinner />
    )
  }

  const handleMatchesListIconOnClick = () => {
    isShown = !isShown
  }

  return (
    <Page>
      <div className={styles.responsiveMenuControls}>
        <div
          className={styles.iconLeft}
          onClick={handleMatchesListIconOnClick}
        >
          <FontAwesomeIcon
            className={styles.timesIcon}
            icon='bars'
          />
        </div>
        <div className={styles.iconMiddle}>
          <FontAwesomeIcon
            className={styles.timesIcon}
            icon='paper-plane'
          />
        </div>
        <div className={styles.iconRight}>
          <FontAwesomeIcon
            className={styles.timesIcon}
            icon='user'
          />
        </div>
      </div>
      <div className={styles.component}>
        <MatchesList
          matches={matches}
          onSelectedMatch={handleSetSelectedMatch}
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
