import React from 'react'
import styles from './MatchesView.scss'
import Page from '../../../../components/Page/Page'
import MatchesList from '../MatchesList/MatchesList'

const MatchesView = () => {
  return (
    <Page>
      <div className={styles.component}>
        <MatchesList />
      </div>
    </Page>
  )
}

export default MatchesView
