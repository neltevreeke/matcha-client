import React, { useEffect } from 'react'
import styles from './DashboardView.scss'
import cx from 'classnames'
import Page from 'components/Page/Page'
import PotentialMatches from '../PotentialMatches/PotentialMatches'
import SelectedMatchProfile from '../../../../components/SelectedMatchProfile/SelectedMatchProfile'
import { postNewActivity } from '../../../../actions/activity'
import * as ActivityType from '../../../../constants/ActivityType'
import { useDispatch, useSelector } from 'react-redux'
import {
  getUser,
  getSelectedPotentialMatch
} from '../../../../selectors/user'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { setSelectedPotentialMatch } from 'actions/users'
import { history } from '../../../../utils/configureStore'

const DashboardView = () => {
  const selectedMatch = useSelector(getSelectedPotentialMatch)
  const dispatch = useDispatch()
  const user = useSelector(getUser)
  const responsiveMenuCrossClasses = [styles.iconContainer]
  const potentialMatchesListClasses = [styles.potentialMatchesList]

  history.listen((location, action) => {
    if (action === 'PUSH') {
      dispatch(setSelectedPotentialMatch(null))
    }
  })

  useEffect(() => {
    if (!selectedMatch) {
      return
    }

    dispatch(postNewActivity({
      type: ActivityType.ACTIVITY_TYPE_PROFILE_VIEW,
      targetUserId: selectedMatch._id,
      userId: user._id
    }))
  }, [
    selectedMatch
  ])

  const handleOnCrossClickMobile = () => {
    dispatch(setSelectedPotentialMatch(null))
  }

  if (!selectedMatch) {
    responsiveMenuCrossClasses.push(styles.displayNone)
    potentialMatchesListClasses.filter(c => c !== styles.displayNone)
  } else if (selectedMatch) {
    potentialMatchesListClasses.push(styles.displayNone)
    responsiveMenuCrossClasses.filter(c => c !== styles.displayNone)
  }

  return (
    <Page>
      <div className={styles.responsiveMenuControls}>
        <div
          className={cx(responsiveMenuCrossClasses)}
          onClick={handleOnCrossClickMobile}
        >
          <FontAwesomeIcon
            className={styles.timesIcon}
            icon='times'
          />
        </div>
      </div>
      <div className={styles.component}>
        <div className={cx(potentialMatchesListClasses)}>
          <PotentialMatches
            selectedMatch={selectedMatch}
          />
        </div>
        <SelectedMatchProfile selectedMatch={selectedMatch} />
      </div>
    </Page>
  )
}

export default DashboardView
