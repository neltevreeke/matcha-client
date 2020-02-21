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
import { getIsMatchesListOpen, getIsMatchProfileOpen } from 'selectors/menu'
import * as ActionTypes from 'constants/ActionTypes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames'

const MatchesView = () => {
  const dispatch = useDispatch()
  const isLoaded = useSelector(getIsMatchesLoaded)
  const matches = useSelector(getMatches)
  const selectedMatch = useSelector(getSelectedMatch)
  const messages = useSelector(getRoomMessages)
  const isMatchesListOpen = useSelector(getIsMatchesListOpen)
  const isMatchProfileOpen = useSelector(getIsMatchProfileOpen)

  const matchesListClasses = [styles.matchesListContainer]
  const matchesSelectedMatchClasses = [styles.selectedMatchContainer]

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

  const handleInMatchesListClick = () => {
    dispatch({
      type: ActionTypes.MATCHES_LIST_CLOSE
    })
  }

  const handleMatchProfileIconOnClick = () => {
    if (!isMatchProfileOpen) {
      dispatch({
        type: ActionTypes.MATCH_PROFILE_OPEN
      })

      return
    }

    dispatch({
      type: ActionTypes.MATCH_PROFILE_CLOSE
    })
  }

  const handleMatchesListIconOnClick = () => {
    if (isMatchesListOpen) {
      dispatch({
        type: ActionTypes.MATCHES_LIST_CLOSE
      })

      return
    }

    dispatch({
      type: ActionTypes.MATCHES_LIST_OPEN
    })
  }

  if (!isMatchesListOpen) {
    matchesListClasses.push(styles.displayMatchesList)
  } else if (isMatchesListOpen) {
    matchesListClasses.filter(c => c !== styles.displayMatchesList)
  }

  if (!isMatchProfileOpen) {
    matchesSelectedMatchClasses.push(styles.displayMatchesList)
  } else if (isMatchProfileOpen) {
    matchesSelectedMatchClasses.filter(c => c !== styles.displayMatchesList)
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
        <div
          className={styles.iconRight}
          onClick={handleMatchProfileIconOnClick}
        >
          <FontAwesomeIcon
            className={styles.timesIcon}
            icon='user'
          />
        </div>
      </div>
      <div className={styles.component}>
        <div
          className={cx(matchesListClasses)}
          onClick={handleInMatchesListClick}
        >
          <MatchesList
            matches={matches}
            onSelectedMatch={handleSetSelectedMatch}
          />
        </div>
        <div className={isMatchProfileOpen ? styles.displayMatchesList : styles.chatContainer}>
          <Chat
            messages={messages}
            selectedMatch={selectedMatch}
          />
        </div>
        <div className={cx(matchesSelectedMatchClasses)}>
          <SelectedMatchProfile
            className={styles.selectedProfile}
            selectedMatch={selectedMatch?.likedUserId}
          />
        </div>
      </div>
    </Page>
  )
}

export default MatchesView
