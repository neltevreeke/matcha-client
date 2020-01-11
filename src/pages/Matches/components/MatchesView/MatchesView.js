import React, { useState } from 'react'
import styles from './MatchesView.scss'
import Page from '../../../../components/Page/Page'
import MatchesList from '../MatchesList/MatchesList'
import Chat from '../Chat/Chat'
import SelectedMatchProfile from '../../../../components/SelectedMatchProfile/SelectedMatchProfile'
import { useSelector } from 'react-redux'
import { getMatchesList } from '../../../../selectors/user'

const MatchesView = () => {
  const matchesList = useSelector(getMatchesList)
  const [selectedMatch, setSelectedMatch] = useState(null)

  return (
    <Page>
      <div className={styles.component}>
        <MatchesList
          matchesList={matchesList}
          setSelectedMatch={setSelectedMatch}
        />
        <Chat
          selectedMatch={selectedMatch}
        />
        <SelectedMatchProfile
          selectedMatch={selectedMatch}
        />
      </div>
    </Page>
  )
}

export default MatchesView
